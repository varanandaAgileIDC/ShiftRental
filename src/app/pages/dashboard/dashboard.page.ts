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
        { name: 'Arabian Automobiles',
        children:[{
          information: 'One of the biggest distributors of automotive products and services in the Gulf region, Arabian Automobiles is the flagship company of the AW Rostamani Group. It prides itself in offering the world’s finest Japanese and European driving technology coupled with the highest standards of service and support. Its greatest asset is in making sure every customer leaves the showroom happy and satisfied with the excellent products and services that Arabian Automobiles is offering.'
        }]
       },
       { name: 'AW Rostamani Trading',
       children:[{
         information: 'AW Rostamani Trading (AWRT) offers the best services as it leads the Automotive Allied Products and Vehicles division of the renowned AW Rostamani Group. It carries different brands of tires, batteries, lubes, vehicles, and other related products in the automotive world. In its fourth year of operations, AW Rostamani Trading has become a significant player in the UAE automotive industry. Driven by passion and excellence, it has a team of expert professionals dedicated to growing the company and the business in this highly competitive market.'
       }]
      },
      { name: 'Shift Technologies',
      children:[{
        information: 'Achieving a competitive advantage in today’s fast-changing modern market lies in strategically using technology to be effectively and efficiently agile, responsive, and adaptable. As the business and IT consulting arm of AW Rostamani, Shift Technologies implements advanced technologies that offer a wide array of digital business solutions to different organizations.'
      }]
     },
     { name: 'Al Rostamani Real Estate',
     children:[{
       information: 'Al Rostamani Real Estate is one of the UAE’s top real estate firms. It provides world-class products and services in the residential and commercial property market. It primarily provides property development, rental, and asset management services, and is the preferred partner in the UAE for property management and sales services.'
     }]
    }
      ];

      //this.faqs[0].open = true;

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


    debugger;

    this.automaticClose = true;

    this.faqs[index].open = !this.faqs[index].open;

    if(this.automaticClose && this.faqs[index].open)
    {


      this.faqs.filter((item,itemIndex) =>{
      if(itemIndex !=index)
      {

        debugger;
        this.faqs[itemIndex].open = false;

      }

       debugger;
       console.log(item,itemIndex)

      }).map(item => {

        debugger;
        console.log(item);
        item.open = false

      })

      debugger;
      console.log(this.faqs)

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
