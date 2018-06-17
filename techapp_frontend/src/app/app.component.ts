import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PssApiProvider } from '../providers/pss-api/pss-api';
import { AuthProvider } from '../providers/auth/auth';
import { MachinesProvider } from '../providers/machines/machines';
import { ProblemTypeProvider } from '../providers/problem-type/problem-type'
import { HttpResponse } from '@angular/common/http';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {  

    constructor(platform: Platform,
                statusBar: StatusBar,
                splashScreen: SplashScreen,
                public pssApi: PssApiProvider,
                public auth: AuthProvider,
                public problemType: ProblemTypeProvider ,
                public machinesInfo: MachinesProvider) {
        this.auth.loadLoginInfoFromCookies();
        this.pssApi.getProblemTypes().subscribe((result: HttpResponse<any>)=>{
            if(result == null){
                return;
            }            
            problemType.setProblemTypes(result.body.data);
        })
        this.pssApi.getUsers().subscribe((result: HttpResponse<any>)=>{
            if(result == null){
                return;
            }
            console.log(result.body.data);
            this.auth.saveUsersList(result.body.data);    
        })
        this.pssApi.getMachines().subscribe((result: HttpResponse<any>)=>{
            if(result==null){                
                return;
            }                        
            this.machinesInfo.saveMachinesList(result.body.data)
        })
        this.pssApi.getMachineLocations().subscribe((result: HttpResponse<any>)=>{
            if(result==null){                
                return;
            }                        
            this.machinesInfo.saveMachineLocations(result.body.data)
        })
        
        
        platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
}

