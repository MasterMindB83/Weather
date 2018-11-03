import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WeatharComponent} from './weathar/weathar.component';

const routes: Routes = [
  {
    path: '',
    component: WeatharComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
