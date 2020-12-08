import { Injectable } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {


  toast:any;

  constructor(private alertCtrl:AlertController,
    private toastCtrl:ToastController) { }


  async presentConfirm() {
    let alert = await this.alertCtrl.create({
      header:'Confirmation Alert',
      message: 'Do you want to exit App?',
      cssClass:'my-custom-class',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Yes',
          handler: () => {
            console.log('Yes clicked');
            navigator['app'].exitApp();
          }
        }
      ]
    });
    await alert.present();
  }


  async toastMessage() {
  
  
    this.toast = this.toastCtrl.create({
     message: 'Press back again to exit',
     duration: 2000,
     position:'bottom'
   }).then((toastData)=>{
     console.log(toastData);
     toastData.present();
   });
 
 
 }

}
