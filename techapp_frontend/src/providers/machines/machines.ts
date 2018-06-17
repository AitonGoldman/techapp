import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MachinesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MachinesProvider {
    machines: any = [];
    machineLocations: any = [];
    constructor(public http: HttpClient) {
        console.log('Hello MachinesProvider Provider');
    }
    
    saveMachinesList(machinesList: any){
        this.machines=machinesList;
    }
    
    getMachinesList(){
        return this.machines;
    }

    saveMachineLocations(machineLocations){
        this.machineLocations=machineLocations;
    }

    getMachineLocations(){
        return this.machineLocations;
    }
    
    getMachine(machineId){
        return this.machines.filter((machine)=>{
            return machine.machine_id==machineId
        })[0];
        
    }
}
