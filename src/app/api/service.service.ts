import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  apiUrl = 'https://randomuser.me/api/?results=20&page=';

  toast:any;
  status = false;

  constructor(private alertCtrl:AlertController,
    private toastCtrl:ToastController,private http:HttpClient) { }



       // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }


  // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };


      // Get response
      getItem(item): Observable<any> {

        debugger;
  
        return this.http
          .get<any>(this.apiUrl + JSON.stringify(item), this.httpOptions)
          .pipe(
            retry(2),
            catchError(this.handleError)
          )
      }


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
