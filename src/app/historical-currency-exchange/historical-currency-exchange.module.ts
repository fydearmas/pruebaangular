import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoricalCurrencyExchangeRoutingModule } from './historical-currency-exchange-routing.module';
import { RouterModule,Routes } from '@angular/router';
import { HistoricalCurrencyExchangeComponent } from './historical-currency-exchange.component';

const routes: Routes = [
  {
    path: '',
    component: HistoricalCurrencyExchangeComponent
  }
];

@NgModule({
  declarations: [],
  imports: [ RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class HistoricalCurrencyExchangeModule { }
