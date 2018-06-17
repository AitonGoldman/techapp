import { PssApiProvider } from '../pss-api/pss-api';
import { Injectable } from '@angular/core';
import { User } from '../../models/user'
import { CookieService } from 'ngx-cookie';

@Injectable()
export class AuthProvider {
    user: User = new User();
    userList: any = {};
    
    constructor(public pssApi: PssApiProvider,
                public _cookieService:CookieService) {
        console.log('Hello AuthProvider Provider');
    }

    loadLoginInfoFromCookies(){
        if(this._cookieService.getObject("loggedInUser")!=null){
            this.user = this._cookieService.getObject("loggedInUser") as User;            
            this.user.loggedIn=true;
        }
        
    }

    logout(){
        this.user=new User();
        this._cookieService.remove("loggedInUser");
    }
    
    login(userJson: any){
        this.user.userName=userJson['username']
        this.user.loggedIn=true;
        this.user.userId=userJson['user_id']
        this._cookieService.putObject("loggedInUser",this.user);        
    }
    
    isLoggedIn(){
        return this.user.loggedIn;
    }

    getUserId(){
        return this.user.userId;
    }

    saveUsersList(userList){
        this.userList=userList;
    }
    
    getUsersList(){        
        return this.userList;        
    }
    getUsername(userId: number){                
        let userList = {}
        for(let user of this.userList){
            userList[user['user_id']]=user
        }

        if(userList[userId]==null){
            return ""
        }
        return userList[userId]['username'];
    }
    
    
}
