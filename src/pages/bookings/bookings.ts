import { UsersPage } from './../users/users';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { PEOPLE } from '../../mocks/person.mocks';
/**
 * Generated class for the BookingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var firebase;
@IonicPage()
@Component({
  selector: 'page-bookings',
  templateUrl: 'bookings.html',
})
export class BookingsPage {
bookings: FormGroup;
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
// PEOPLE

// myname;
// value: string;
// users=[];
// cuisine={
//   _key: '',
//   fname:''
// }
// info: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,private fb:FormBuilder) {
    this.bookings=this.fb.group({
      fname:['',Validators.required],
      lname:['',Validators.required],
      surname:['',Validators.required],
      contactNo:['',Validators.required],
      email:['',Validators.required],
    })
    // firebase.database().ref('/cuisine/').on("value",(snapshot) =>{

    //   snapshot.forEach((snap) =>{
    //     this.cuisine._key = snap.key;
    //     console.log(snap.val().fname+'key'+snap.key)
    //     this.users.push({fname:snap.val().fname,key:snap.key});
    //     return false;
    //   });
    // });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookingsPage');
  }

  // writeCuisine(){
  //   this.users=[];
  //   console.log(this.fname);
  //   this.cuisine.fname = this.fname;
  //   var database = firebase.database();
  //    database.ref('/cuisine/').push(this.cuisine);
  // }
  
  userLogout(){
    firebase.auth().signOut().then(User =>{
      this.navCtrl.push("HomePage");
    });
  } 

  clickListner(){
    PEOPLE.push({fname:this.fname,lname:this.lname,surname:this.surname,contactNo:this.contactNo,email:this.email})
    this.navCtrl.push("UserIsBookingPage",{variable: this.name});
  }
}
