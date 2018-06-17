import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ProblemTypeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProblemTypeProvider {
    problemTypes:any = []
    constructor(public http: HttpClient) {
        console.log('Hello ProblemTypeProvider Provider');
    }
    setProblemTypes(problemTypes:any){
        this.problemTypes = problemTypes;
    }
    getProblemTypes(){
        return this.problemTypes;
    }
}
