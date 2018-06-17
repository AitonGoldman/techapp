import { HttpClient, HttpEvent, HttpEventType, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoadingController } from 'ionic-angular';
import { Observable} from 'rxjs/Observable';
import { Subject} from 'rxjs/Subject';
import { catchError, timeout, map, tap, last } from 'rxjs/operators';
import { of }         from 'rxjs/observable/of';
import { HttpLoadingProvider } from '../http-loading/http-loading'

/*
  Generated class for the PssApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PssApiProvider {
    pssHostUrl:string='http://0.0.0.0:8000';        
    loading_instance = null;   
    timeoutInMs:number=10000;
    backendVersion=3;
    
    constructor(public http: HttpClient,
                public loadingCtrl: LoadingController,
                public httpLoading: HttpLoadingProvider) {
        console.log('Hello PssApiProvider Provider');
    }
    getApiUrl(){
        return this.pssHostUrl+'/api';
    }
    getBackendHost(){
        return this.pssHostUrl;
    }

    makeHot(cold) {
        const subject = new Subject();
        cold.subscribe(subject);
        return new Observable((observer) => subject.subscribe(observer));
    }
    
    generate_api_call(apiName,url,method,hideLoading?){
        return (...restOfArgs: any[]) => {
            
            let localUrl=url;            
            let postObject=null;            
            if(method=="post" || method=="put" || method=="delete") {
                postObject=restOfArgs.shift();
            }
            let localMatches = localUrl.match(/\:arg/g);
            if (restOfArgs!=null && localMatches!=null && localMatches.length!=restOfArgs.length){
                throw new Error("Oops - number of args in url and args given do not match");
            }
            if(hideLoading==null){
                //this.loading_instance = this.loadingCtrl.create({
                //    content: 'Please wait...'                
                //});
                //this.loading_instance.present();
                this.httpLoading.openLoadingDialog(apiName);
            }
            
            while (localUrl.indexOf(':arg')>=0) {
                let newUrl=localUrl.replace(":arg",restOfArgs.shift())
                localUrl = newUrl;
            }
            let requestArgs = { reportProgress: true, withCredentials:true, body:postObject };
            localUrl=localUrl+'?event_id=1';

            const req = new HttpRequest(method, localUrl, requestArgs);            

            let request =  this.http.request(req).pipe(
                map(event  => this.getEventMessage(event as HttpEvent<any>)),
                tap(message => console.log('PROGRESS IS '+message)),
                last(),
                timeout(10000),
                catchError(this.handleError(apiName,null))                    
            )
            
            // let request =  this.http.request(method,localUrl,requestArgs).pipe(
            //     //map(event  => this.getEventMessage(event as HttpEvent<any>)),
            //     // tap(message => console.log('PROGRESS IS '+message)),
            //     last(),
            //     timeout(10000),
            //     catchError(this.handleError(apiName,null))                    
            // )
            let result_observable = this.makeHot(request)

            //result_observable.subscribe(()=>{if(hideLoading==null){this.loading_instance.dismiss()}});
            result_observable.subscribe(()=>{if(hideLoading==null){this.httpLoading.closeLoadingDialog()}});
            return result_observable;            
        }
    }
    
    //completeTicketPurchase = this.generate_api_call('completeTicketPurchase',this.getApiUrl()+"/:arg/prereg-token/:arg",'put');
    addProblem = this.generate_api_call('Saving Problem',this.getApiUrl()+"/problem",'post');    
    editMachine = this.generate_api_call('Saving machine',this.getApiUrl()+"/machine",'put');
    editProblem = this.generate_api_call('Saving Problem',this.getApiUrl()+"/problem",'put');    
    getMachine = this.generate_api_call('Getting Machine',this.getApiUrl()+"/machine/:arg",'get');
    getMachines = this.generate_api_call('Getting Machines',this.getApiUrl()+"/machines",'get');    
    getMachineLocations = this.generate_api_call('Getting Machine Locations',this.getApiUrl()+"/machine_locations",'get');
    getProblems = this.generate_api_call('Getting Problems',this.getApiUrl()+"/problems",'get');    
    getProblemTypes = this.generate_api_call('Getting Problem Types',this.getApiUrl()+"/problem_types",'get');    
    getUsers = this.generate_api_call('Gettin Users',this.getApiUrl()+"/users",'get');            
    selectBackupMachine = this.generate_api_call('Getting backup machine',this.getApiUrl()+"/backup_machine",'put');
        
    private getEventMessage(event: HttpEvent<any>) {        
        switch (event.type) {
        case HttpEventType.Sent:            
            return `Http Request Sending`;
            
        case HttpEventType.DownloadProgress:
            // Compute and show the % done:
            const percentDone = Math.round(100 * event.loaded / event.total);
            this.httpLoading.updateLoadingDialogMessage(null,percentDone+'% loaded...')
            return `Http Request is ${percentDone}% uploaded.`
            
        case HttpEventType.Response:
            return event
            
        default:
            return `surprising upload event: ${event.type}.`
        }
    }
    
    private handleError<T> (operation = 'operation', result?: T) {                    
        return (error: any): Observable<T> => {                        
            if(error.constructor.name=="TimeoutError"){
                console.log('TIMEOUT IS HAPPENING...');
                //console.log(error)
                error.status=-1;
                error.error={message:"Operation Timed Out.  Please Try Again. "}
            }
            console.error(error); // log to console instead                
            if(error.status!=404){                    
                let error_message = "";
                if(error.status==0){
                    error_message="Internal server error.  Please try again."
                } else {
                    error_message=error.error.message;
                }
                //this.httpLoading.closeLoadingDialog();
                alert("error message is ... " + error_message);
                //this.pssToast.showToast(error_message,7000,"dangerToast");                    
            }
            if (error.status==404){
                console.log('found 404...')
                result = {data:null} as any
            }               
            return of(result as T);
        };        
    }            
}
