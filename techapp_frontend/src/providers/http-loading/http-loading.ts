import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoadingController, Loading} from 'ionic-angular';

/*
  Generated class for the HttpLoadingProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpLoadingProvider {

    queue: any = [];
    dialogContent: any = {message:'',loading:''};
    loadingDialogInstance: Loading = null; 
    constructor(public http: HttpClient,
                public loadingCtrl: LoadingController) {
        console.log('Hello HttpLoadingProvider Provider');
    }        

    getDialogContentString(){
        return this.dialogContent.message+'<br>'+this.dialogContent.loading;
    }
    
    updateLoadingDialogMessage(message,loading){
        if(message!=null){
            this.dialogContent['message']=message;
        }
        if(loading!=null){
            if(loading == "100% loaded..."){
                this.dialogContent['loading']="";
            } else {
                this.dialogContent['loading']=loading;                
            }
            
        }        
        this.loadingDialogInstance.data.content=this.getDialogContentString();
    }
    
    openLoadingDialog(message){
        this.queue.push(message);        
        if(this.loadingDialogInstance==null){
            this.loadingDialogInstance = this.loadingCtrl.create({
                content: ""
            });
            this.updateLoadingDialogMessage(message,null);
            this.loadingDialogInstance.present();
            
        } else {            
            this.updateLoadingDialogMessage(message,null);
            //this.loadingDialogInstance.data.content=message+'<br> poop';
        }
    }
    closeLoadingDialog(){
        setTimeout(()=>{
            this.queue.pop()
            if(this.queue.length==0){
                this.loadingDialogInstance.dismiss();
                this.loadingDialogInstance=null;
            }            
        }, 500)
    }
}
