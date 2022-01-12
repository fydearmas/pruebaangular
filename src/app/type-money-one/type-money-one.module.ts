import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypeMoneyOneRoutingModule } from './type-money-one-routing.module';
import { RouterModule,Routes } from '@angular/router'
import { TypeMoneyOneComponent } from './type-money-one.component'

const routes: Routes = [
  {
    path: '',
    component: TypeMoneyOneComponent
  }
];

@NgModule({
  declarations: [],
  imports: [ RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TypeMoneyOneModule { }
