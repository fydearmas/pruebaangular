import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TypeMoneyOneComponent } from './type-money-one.component'

const routes: Routes = [
  {
    path: '',
    component: TypeMoneyOneComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TypeMoneyOneRoutingModule { }
