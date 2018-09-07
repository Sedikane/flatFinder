import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import firebase from 'firebase';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// declare var firebase;

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }
Admin(){
  this.navCtrl.push("UsersPage");
}
client(){
  this.navCtrl.push("ClientPage");
}
}
