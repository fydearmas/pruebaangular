import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import {MaterialExampleModule} from '../material.module';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome'
import {MatInputModule} from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { HeaderComponent } from './header/header.component';
import { TypeMoneyOneComponent } from './type-money-one/type-money-one.component';
import { AppRoutingModuleModule } from './app-routing-module.module';
import { HistoricalCurrencyExchangeComponent } from './historical-currency-exchange/historical-currency-exchange.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TypeMoneyOneComponent,
    HistoricalCurrencyExchangeComponent,


  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialExampleModule,
    MatCardModule,
    FlexLayoutModule,
    FontAwesomeModule,
    MatInputModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    AppRoutingModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
