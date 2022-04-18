import { rejects } from "assert";
import { resolve } from "dns";
import { promise } from "protractor";

export class AuthService{
loggedIn =false;

isAuthentication(){
    const promise = new Promise(
        (resolve,rejects) =>{
            setTimeout(() =>{
                resolve(this.loggedIn)
            },800);
        }
    );
    return promise;
}


login(){
    this.loggedIn=true;
}
logout(){
    this.loggedIn=false
}


}