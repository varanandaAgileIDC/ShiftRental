import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardPageRoutingModule } from './dashboard-routing.module';

import { DashboardPage } from './dashboard.page';
import { SharedComponentModule } from 'src/app/components/shared-component/shared-component.module';
import { AccordionListComponent } from 'src/app/components/accordion-list/accordion-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardPageRoutingModule
  ],
  declarations: [DashboardPage,AccordionListComponent]
})
export class DashboardPageModule {}
