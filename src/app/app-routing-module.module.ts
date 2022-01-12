import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'
// import { HistoricalCurrencyExchangeModule } from './';


const routes: Routes = [
  {
    path: 'historico',
    loadChildren: () =>
      import('./historical-currency-exchange/historical-currency-exchange.module').then((m) => m.HistoricalCurrencyExchangeModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./type-money-one/type-money-one-routing.module').then((m) => m.TypeMoneyOneRoutingModule),
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModuleModule { }
