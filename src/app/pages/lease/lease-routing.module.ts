import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeasePage } from './lease.page';

const routes: Routes = [
  {
    path: '',
    component: LeasePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeasePageRoutingModule {}
