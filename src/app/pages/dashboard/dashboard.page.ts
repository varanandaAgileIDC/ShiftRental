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

  faqs = [];

  automaticClose = false;


  constructor(private platform:Platform,
    private router:Router,private apiService:ServiceService) {


      this.faqs = [
        { name: 'nhguyjsfcu',
        children:[{
          information: 'uhcidgscs'
        }]
       },
       { name: 'nhguyjsfcu',
       children:[{
         information: 'gixyisgcisfdc'
       }]
      },
      { name: 'nhguyjsfcu',
      children:[{
        information: 'fvdfvdfv'
      }]
     },
     { name: 'nhguyjsfcu',
     children:[{
       information: 'eferferferf'
     }]
    }
      ];

      this.faqs[0].open = true;

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


  toogleSection(index)
  {

    this.faqs[index].open = !this.faqs[index].open;

    if(this.automaticClose && this.faqs[index].open)
    {

      this.faqs.filter((item,itemIndex) => itemIndex !=index).map(item => item.open = false)

    }

  }

  toggleItem(index,childIndex)
  {

    this.faqs[index].children[childIndex].open = !this.faqs[index].children[childIndex].open;

  }

  // expandItem(item): void {
  //   if (item.expanded) {
  //     item.expanded = false;
  //   } else {
  //     this.faqs.map(listItem => {
  //       if (item == listItem) {
  //         listItem.expanded = !listItem.expanded;
  //       } else {
  //         listItem.expanded = false;
  //       }
  //       return listItem;
  //     });
  //   }
  // }



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
