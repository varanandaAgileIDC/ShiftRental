import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  registerForm : FormGroup
  submitted = false;

  constructor(private router:Router,
    private platform:Platform,private formBuilder:FormBuilder) {


      this.registerForm = this.formBuilder.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        mobile: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
        nationality: ['', Validators.required],
    });

     }

  ngOnInit() {

  

  }

  ionViewDidEnter(){

    this.platform.backButton.subscribe(() => {

      if(this.router['routerState'].snapshot.url == '/dashboard')
      {

      }
      else
      {

      debugger;
      this.router.navigate(['home']);

      }

    });

   
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
        return;
    }else {
      console.log(this.registerForm.value);
      this.register(this.registerForm.value);
      
    } 
}

  register(formData)
  {

    this.router.navigate(['password']);

  }
}
