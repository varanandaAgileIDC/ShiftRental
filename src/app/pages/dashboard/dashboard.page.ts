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


  slideItems = [];
  apiData = [];

  segmentValue = 'Rent a Car';
  durationValue: number;
  radioValue: any;
  startDate: any;
  returnDate: any;
  leaseStartDate: any;

  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true
  };

  slideOptsTop = {
    spaceBetween: 0,
    slidesPerView: 1.15,
  };

  slideOpts: {
    spaceBetween: 0,
    slidesPerView: 1.15,  
    initialSlide: 0,
    autoplay: true
  };


  constructor(private platform:Platform,
    private router:Router,private apiService:ServiceService) {


     }

  ngOnInit() {

    this.slideItems = [
      {
        name:'one',
        image:'/assets/logo.png'
      },
      {
        name:'two',
        image:'/assets/logo.png'
      },
      {
        name:'three',
        image:'/assets/logo.png'
      },
      {
        name:'four',
        image:'/assets/logo.png'
      },
      {
        name:'five',
        image:'/assets/logo.png'
      }
    ]

  }

  ionViewDidEnter(){

    this.observableData();
   

    this.platform.backButton.subscribeWithPriority(10, () => {

      debugger
      if(!this.apiService.status)
      {

        if(this.router['routerState'].snapshot.url == '/tabs/dashboard')
        {
    
          debugger;
          this.apiService.status = true;

          this.apiService.toastMessage();
    
        }

      }
    else
    {

     this.apiService.presentConfirm();

    }
  });

  }



  slidesDidLoad(slides) {
    slides.startAutoplay();
  }


  observableData()
  {


    this.apiService.getItem(1).subscribe((response) => {
      
      debugger;
  
      console.log(response);

      this.apiData = this.apiData.concat(response['results']);

  
      });
  


  }

}
