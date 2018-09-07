import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
/**
 * Generated class for the UsersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var firebase;
@IonicPage()
@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {
users: FormGroup;
display=0;

signup:boolean=false;
logins:boolean=false;

fname;
lname;
email;
password;
contactNo;

human={
  fname:"",
  lname:"",
  contactNo:"",
  password:""
}
loginError: string;
  constructor(public navCtrl: NavController, public navParams: NavParams,private fb:FormBuilder) {
   this.users=this.fb.group({
    email:['',[Validators.required,Validators.pattern('[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})'),Validators.maxLength(25)]],
    password:['',[Validators.required,Validators.minLength(6)]],
    fname:['',[Validators.required,Validators.pattern('[a-zA-Z]*'),Validators.maxLength(20)]],
    lname:['',[Validators.required,Validators.pattern('[a-zA-Z]*'),Validators.maxLength(20)]],
    contactNo:['',[Validators.required,Validators.maxLength(10)]],
   })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsersPage');
  }
  login(){ firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(User =>{
    this.navCtrl.push("AdvertisePage");
  })
  }
  submit(){
    this.display = 1;
  }
  signups(){
    firebase.auth().createUserWithEmailAndPassword(this.email,this.password).then(user => {
    this.display = 1;
    })
  }
}
