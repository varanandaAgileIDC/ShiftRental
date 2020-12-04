import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { ServiceService } from '../api/service.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  status = false;
  loginDetails = {email:'',password:''}

  constructor(private router:Router,
    private api:ServiceService,
    private platform:Platform
    ) {}

  ionViewDidEnter(){

    this.platform.backButton.subscribeWithPriority(10, () => {

      debugger
      if(!this.status)
      {

        if(this.router['routerState'].snapshot.url == '/home')
        {
    
          debugger;
          this.status = true;
    
        }

      }
    else
    {

     this.api.presentConfirm();

    }
  });
   
  }


  login()
  {


  }

  createAccount()
  {

    this.status = false;
    this.router.navigate(['register']);


  }



}
