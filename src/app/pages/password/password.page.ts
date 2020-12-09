import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-password',
  templateUrl: './password.page.html',
  styleUrls: ['./password.page.scss'],
})
export class PasswordPage implements OnInit {

  check = false;
  submitted = false;
  passwordForm:FormGroup;

  constructor(private router:Router,
    private platform:Platform,private formBuilder:FormBuilder) { }

  ngOnInit() {

    this.passwordForm = this.formBuilder.group({

      password:['', Validators.required]

    });

  }


  get f()
  {

    return this.passwordForm.controls;

  }
  

  ionViewDidEnter(){
  
    this.platform.backButton.subscribe(() => {
      debugger;

      if(this.router['routerState'].snapshot.url == '/dashboard')
      {

      }
      else
      {

      this.router.navigate(['register']);
      }

    });
    
  }
  

  onSubmit()
  {

    this.submitted = true;

    if(this.passwordForm.invalid)
    {
      return;
    }
    else
    {

      if(this.check)
      {

      this.register(this.passwordForm.value)

    }
    else
    {

      alert('Please aggree terms and conditions');

    }

    }

  }

  select(event)
  {

    this.check = event.currentTarget.checked;

  }

  register(formData)
  {

    this.router.navigate(['/tabs/dashboard']);

  }


}
