import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { ServiceService } from 'src/app/api/service.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.scss'],
})
export class BookingsPage implements OnInit {

  constructor(private platform:Platform,
    private router:Router,private apiService:ServiceService) { }

  ngOnInit() {
  }

  ionViewDidEnter(){
   
    this.platform.backButton.subscribe(() => {
   
      if(this.router['routerState'].snapshot.url == '/tabs/bookings')
          {
      
            debugger;
  
            this.apiService.status = false;
  
           this.router.navigate(['/tabs/dashboard']);
      
          }
  
  
        });
  

  }

}
