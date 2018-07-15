import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { ProblemModel, ProblemModelBuilder } from '../../models/problem'
import { PssApiProvider } from '../../providers/pss-api/pss-api';
import { AuthProvider } from '../../providers/auth/auth';

/**
 * Generated class for the ProblemEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-problem-edit',
  templateUrl: 'problem-edit.html',
})
export class ProblemEditPage {
    currentProblem: ProblemModel = new ProblemModelBuilder().build();
    
    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public alertCtrl: AlertController,
                public pssApi: PssApiProvider,
                public auth: AuthProvider) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad ProblemEditPage');        
        if(this.navParams.get('live')==null){
            this.navCtrl.push('HomePage');
            return;
        }
        this.currentProblem = this.navParams.get('problemType');
        
    }
    submitProblem(){
        this.pssApi.editProblem(this.currentProblem).subscribe((result)=>{
            this.openSuccessDialog();
        })
    }
    openSuccessDialog() {        
        let alert = this.alertCtrl.create({
            title: 'Problem Edited',
            subTitle: 'Changes to problem succesfully saved'            
        });
        alert.addButton({
            text: 'OK',
            handler: data => {
                this.navCtrl.push('HomePage',{machineId:this.currentProblem.machine_id})
            }})
        alert.present();
    }
    
}
