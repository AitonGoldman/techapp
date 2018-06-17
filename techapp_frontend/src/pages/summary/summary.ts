import { HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PssApiProvider } from '../../providers/pss-api/pss-api';
import { MachinesProvider } from '../../providers/machines/machines';
import { AuthProvider } from '../../providers/auth/auth';

/**
 * Generated class for the SummaryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-summary',
  templateUrl: 'summary.html',
})
export class SummaryPage {
    problems: any = [];
    constructor(public navCtrl: NavController,
                public pssApi: PssApiProvider,
                public navParams: NavParams,
                public auth: AuthProvider,
                public machinesInfo: MachinesProvider ) {
    }
    
    ionViewDidLoad() {
        console.log('ionViewDidLoad SummaryPage');
        this.pssApi.getProblems().subscribe((result: HttpResponse<any>)=>{
            if(result==null){
                return;
            }            
            this.problems = result.body.data;
        })
    }    
}
