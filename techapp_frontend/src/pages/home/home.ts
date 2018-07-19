import { HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, FabContainer } from 'ionic-angular';
import { PssApiProvider } from '../../providers/pss-api/pss-api';
import { AuthProvider } from '../../providers/auth/auth';
import { MachinesProvider } from '../../providers/machines/machines';
import { ProblemTypeProvider } from '../../providers/problem-type/problem-type'
import { ProblemModel, ProblemModelBuilder } from '../../models/problem'
/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
    //
    // get list of machines
    // launch dialog 
    // 
    // 
    eventId:number = 1;
    loggedIn:boolean = false;
    machines:any = [];
    filteredMachines:any = [];
    mode:string = "tech";
    backupMachineEra: number = null;
    currentMachine: any = null;
    
    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public pssApi: PssApiProvider,
                public alertCtrl: AlertController,
                public auth: AuthProvider,
                public problemTypes: ProblemTypeProvider,
                public machinesInfo: MachinesProvider) {    
    }
    
    ionViewWillEnter(){
        this.machines = this.machinesInfo.getMachinesList();
    }
    
    ionViewDidLoad() {
        console.log('ionViewDidLoad HomePage');
        this.auth.login({'user_id':1,'username':'eck'});
        this.loggedIn=this.auth.isLoggedIn();

        this.loggedIn=this.auth.isLoggedIn();
        if(this.navParams.get('mode')=='backup'){
            this.mode='backup';
        }
        if(this.navParams.get('machineId')!=null){
            this.pssApi.getMachine(this.navParams.get('machineId')).subscribe((result: HttpResponse<any>)=>{
                if(result==null){
                    return;
                }            
                this.currentMachine = result.body.data;
            })
            return;
        }        
    }
    
    getMachine(machine: any){
        this.filteredMachines=[];
        this.pssApi.getMachine(machine.machine_id).subscribe((result: HttpResponse<any>)=>{
            if(result==null){
                return;
            }            
            this.currentMachine = result.body.data;
        })
    }
    
    switchMode(mode: string, fab){
        fab.close();
        this.mode=mode;
    }

    logout(fab: FabContainer){
        fab.close();
        this.auth.logout();
        this.loggedIn=false;
    }
    
    login(fab: FabContainer){
        fab.close();
        console.log(this.auth.getUsersList());
        this.openLoginDialog(this.auth.getUsersList());
    }

    machineLookup(ev: any){
        this.currentMachine=null;
        const val = Number(ev.target.value);        
        if (val > 999 && val < 10000) {
            this.filteredMachines = this.machines.filter((item) => {                
                return item.machine_four_digit_id == val;
            })
        }
    }

    openProblemDialog() {        
        let alert = this.alertCtrl.create();
        alert.setTitle('Problem');
        for(let problemType of this.problemTypes.getProblemTypes()){
            alert.addInput({
                type: 'radio',
                label: problemType,
                value: problemType,
                checked: false
            });            
        }
        alert.addButton('Cancel');
        alert.addButton({
            text: 'OK',
            handler: data => {                
                let problem: ProblemModel = new ProblemModelBuilder().setProblemType(data).setMachineId(this.currentMachine.machine_id).setUserId(this.auth.getUserId()).build()
                this.pssApi.addProblem(problem).subscribe((result: HttpResponse<any>)=>{                    
                    problem.problem_id=result.body.data.problem_id
                    console.log(problem);
                    //problem.problem_id = result.body.data.problem_id;
                    this.currentMachine.problems.unshift(problem);
                })
            }
        });
        alert.present();
    }
    
    openLoginDialog(users) {
        console.log(users);
        let alert = this.alertCtrl.create();
        alert.setTitle('Login');
        for(let user of users){
            alert.addInput({
                type: 'radio',
                label: user.username,
                value: user,
                checked: false
            });            
        }
        
        alert.addButton('Cancel');
        alert.addButton({
            text: 'OK',
            handler: data => {
                this.auth.login(data);
                this.loggedIn=this.auth.isLoggedIn();
                this.currentMachine=null;
            }
        });
        alert.present();
    }
    openMachineLocationDialog() {        
        let alert = this.alertCtrl.create();
        alert.setTitle('Login');
        for(let machineLocation of this.machinesInfo.getMachineLocations()){
            alert.addInput({
                type: 'radio',
                label: machineLocation,
                value: machineLocation,
                checked: false
            });            
        }
        
        alert.addButton('Cancel');
        alert.addButton({
            text: 'OK',
            handler: data => {                
                this.currentMachine.machine_location=data;
                this.pssApi.editMachine(this.currentMachine).subscribe((result: HttpResponse<any>)=>{
                    if(result==null){
                        return;
                    }                                
                })
            }
        });
        alert.present();
    }
    selectbackupMachine(machine_era_type){
        this.pssApi.selectBackupMachine({machine_era_type:machine_era_type}).subscribe((result: HttpResponse<any>)=>{
            if(result==null){                
                return;
            }
            this.openBackupMachineSuccessDialog(result.body.data.machine_name)
        })        
    }
    openBackupMachineSuccessDialog(machineName) {        
        let alert = this.alertCtrl.create({
            title: 'Backup Machine',
            subTitle: 'Backup machine '+machineName+' selected.'            
        });
        alert.addButton({text: 'OK'})
        alert.present();
    }
    
    submitEckProblem(){
        let eckUserId: any = this.auth.getUsersList()[0]['user_id']
        let problem: ProblemModel = new ProblemModelBuilder().setProblemType("EckProblem").setMachineId(this.currentMachine.machine_id).setUserId(eckUserId).build()
        this.pssApi.addProblem(problem).subscribe((result)=>{
            this.currentMachine.problems.unshift(problem);
        })
    }
    
}
