import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private router:Router,
    private platform:Platform) { }

  ngOnInit() {
  }

  ionViewDidEnter(){

    this.platform.backButton.subscribe(() => {

      if(this.router['routerState'].snapshot.url == '/dashboard')
      {

      }
      else
      {

      debugger;
      this.router.navigate(['home']);
      
      }

    });

   
  }

  register()
  {

    this.router.navigate(['password']);

  }
}
