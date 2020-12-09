import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { ServiceService } from 'src/app/api/service.service';

@Component({
  selector: 'app-more',
  templateUrl: './more.page.html',
  styleUrls: ['./more.page.scss'],
})
export class MorePage implements OnInit {

  constructor(private platform:Platform,
    private apiService:ServiceService,
    private router:Router) { }

  ngOnInit() {
  }

  ionViewDidEnter(){
   
    this.platform.backButton.subscribe(() => {
   
      if(this.router['routerState'].snapshot.url == '/tabs/more')
          {
      
            debugger;
  
            this.apiService.status = false;
  
           this.router.navigate(['/tabs/dashboard']);
      
          }
  
  
        });
  

  }

}
