import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { ServiceService } from '../api/service.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  status = false;
  loginDetails = {email:'',password:''}

  loginForm: FormGroup;
  submitted = false;

  constructor(private router:Router,
    private api:ServiceService,
    private platform:Platform,
    private formBuilder:FormBuilder
    ) {

      this.loginForm = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required],
      });
  

    }

  ionViewDidEnter(){

    debugger;

    this.loginForm.reset();
    
    this.platform.backButton.subscribeWithPriority(10, () => {

      debugger
      if(!this.status)
      {

        if(this.router['routerState'].snapshot.url == '/home')
        {
    
          debugger;
          this.status = true;

          this.api.toastMessage();
    
        }

      }
    else
    {

     this.api.presentConfirm();

    }
  });
   
  }


  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
        return;
    }else {
      console.log(this.loginForm.value);
      this.login(this.loginForm.value);
     
    } 
}

  login(formData)
  {

    this.status = false;
    this.router.navigate(['dashboard']);

  }

  createAccount()
  {

    this.status = false;
    this.router.navigate(['register']);


  }



}
