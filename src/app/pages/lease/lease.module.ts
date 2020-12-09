import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeasePageRoutingModule } from './lease-routing.module';

import { LeasePage } from './lease.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeasePageRoutingModule
  ],
  declarations: [LeasePage]
})
export class LeasePageModule {}
