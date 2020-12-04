import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-password',
  templateUrl: './password.page.html',
  styleUrls: ['./password.page.scss'],
})
export class PasswordPage implements OnInit {

  constructor(private router:Router,
    private platform:Platform) { }

  ngOnInit() {
  }

  ionViewDidEnter(){
  
    this.platform.backButton.subscribe(() => {
      debugger;

      if(this.router['routerState'].snapshot.url == '/dashboard')
      {

      }
      else
      {

      this.router.navigate(['register']);
      }

    });
    
  }


  register()
  {

    this.router.navigate(['dashboard']);

  }


}
