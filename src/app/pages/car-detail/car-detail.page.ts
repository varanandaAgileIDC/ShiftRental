import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { Car } from 'src/app/api/car';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.page.html',
  styleUrls: ['./car-detail.page.scss'],
})
export class CarDetailPage implements OnInit {

  carDetails={name: '',
    image: '',
    age:'',
    fuelType: '',
    capacity: '',
    heavyLug: '',
    lightLug: '',
    transmission: '',
    daily: '',
    weekly: '',
    monthly: ''
  };

  constructor(private platform:Platform,
    private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit() {

    debugger;
    var details = this.activatedRoute.snapshot.params['car'];
    this.carDetails = JSON.parse(details);

    console.log(this.carDetails['name']);
  }

  ionViewDidEnter(){


  
   
    this.platform.backButton.subscribe(() => {

      debugger;
      this.router.navigate(['cars']);


    });
    

  }

}
