import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { PEOPLE } from '../../mocks/person.mocks';
/**
 * Generated class for the CancelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var firebase;
@IonicPage()
@Component({
  selector: 'page-cancel',
  templateUrl: 'cancel.html',
})
export class CancelPage {
  cancel: FormGroup;
name;
  fname;
  lname;
  surname;
  email;
  contactNo;
  human={
  fname:"",
  lname:"",
  surname:"",
  email:"",
    contactNo:"",
    password:""
  }
;
  PEOPLE
  constructor(public navCtrl: NavController, public navParams: NavParams,private fb: FormBuilder) {
    this.cancel=this.fb.group({
      fname:['',Validators.required],
      lname:['',Validators.required],
      surname:['',Validators.required],
      contactNo:['',Validators.required],
      email:['',Validators.required],
  
    })
  }
      
  ionViewDidLoad() {
    console.log('ionViewDidLoad CancelPage');
  }

userLogout(){
  firebase.auth().signOut().then(User =>{
    this.navCtrl.push("HomePage");
  });
} 
clickListner(){
  PEOPLE.push({fname:this.fname,lname:this.lname,surname:this.surname,contactNo:this.contactNo,email:this.email})
  this.navCtrl.push("BookedUsersPage",{variable: this.name});
 
}
}
