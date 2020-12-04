import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private alertCtrl:AlertController) { }


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

}
