import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { ServiceService } from 'src/app/api/service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  status = false;

  constructor(private platform:Platform,
    private router:Router,private api:ServiceService) { }

  ngOnInit() {
  }

  ionViewDidEnter(){
   

    this.platform.backButton.subscribeWithPriority(10, () => {

      debugger
      if(!this.status)
      {

        if(this.router['routerState'].snapshot.url == '/dashboard')
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

}
