import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.page.html',
  styleUrls: ['./cars.page.scss'],
})
export class CarsPage implements OnInit {

  carsArray = [];

  constructor(private platform:Platform,private router:Router) { }

  ngOnInit() {

    this.carsArray = [
      {
        name:'kia seltos 1.6 L',
        image:'http://st.motortrend.com/uploads/sites/10/2017/04/2018-chevrolet-equinox-lt-suv-side-view.png',
        age:'23',
        fuelType:'petrol',
        capacity:'6',
        heavyLug:'1',
        lightLug:'1',
        transmission:'Automatic Transmission',
        daily:'95',
        weekly:'101',
        monthly:'101'
      },
      {
        name:'kia seltos 1.6 L',
        image:'http://st.motortrend.com/uploads/sites/10/2017/04/2018-chevrolet-equinox-lt-suv-side-view.png',
        age:'23',
        fuelType:'petrol',
        capacity:'6',
        heavyLug:'1',
        lightLug:'1',
        transmission:'Automatic Transmission',
        daily:'95',
        weekly:'101',
        monthly:'101'
      },
      {
        name:'kia seltos 1.6 L',
        image:'http://st.motortrend.com/uploads/sites/10/2017/04/2018-chevrolet-equinox-lt-suv-side-view.png',
        age:'23',
        fuelType:'petrol',
        capacity:'6',
        heavyLug:'1',
        lightLug:'1',
        transmission:'Automatic Transmission',
        daily:'95',
        weekly:'101',
        monthly:'101'
      },
      {
        name:'kia seltos 1.6 L',
        image:'http://st.motortrend.com/uploads/sites/10/2017/04/2018-chevrolet-equinox-lt-suv-side-view.png',
        age:'23',
        fuelType:'petrol',
        capacity:'6',
        heavyLug:'1',
        lightLug:'1',
        transmission:'Automatic Transmission',
        daily:'95',
        weekly:'101',
        monthly:'101'
      },
      {
        name:'kia seltos 1.6 L',
        image:'http://st.motortrend.com/uploads/sites/10/2017/04/2018-chevrolet-equinox-lt-suv-side-view.png',
        age:'23',
        fuelType:'petrol',
        capacity:'6',
        heavyLug:'1',
        lightLug:'1',
        transmission:'Automatic Transmission',
        daily:'95',
        weekly:'101',
        monthly:'101'
      },
      {
        name:'kia seltos 1.6 L',
        image:'http://st.motortrend.com/uploads/sites/10/2017/04/2018-chevrolet-equinox-lt-suv-side-view.png',
        age:'23',
        fuelType:'petrol',
        capacity:'6',
        heavyLug:'1',
        lightLug:'1',
        transmission:'Automatic Transmission',
        daily:'95',
        weekly:'101',
        monthly:'101'
      }
    ]

  }

  ionViewDidEnter(){
  
    this.platform.backButton.subscribe(() => {

      debugger;
      this.router.navigate(['dashboard']);


    });
    

  }


}
