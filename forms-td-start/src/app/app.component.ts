import { ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signForm:NgForm;
  defaultQuestion='pet';
  answer='';
  genders = ['Male' , 'Female'];
  user ={
       username:'',
       email :'',
       secretQuestion :'',
       answer : '',
       gender :''
  };
submitted =false;
  suggestUserName() {
    const suggestedName = 'Prashant';
    this.signForm.form.patchValue({
      userData:{
     username:suggestedName
      }
    });
  }

  //onSubmit(form: NgForm){
    //console.info(form);
  //}
  onSubmit(){
  this.submitted=true;
  this.user.username = this.signForm.value.userData.username;
  this.user.email = this.signForm.value.userData.email;
  this.user.secretQuestion = this.signForm.value.secret;
  this.user.gender = this.signForm.value.gender;
  this.signForm.reset();
  }

}
