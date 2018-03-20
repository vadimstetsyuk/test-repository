import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NvD3Module } from 'ng2-nvd3';

import { AppComponent } from './app.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { SwitchDataComponent } from './switch-data/switch-data.component';
import { DataService } from './data.service';

import 'd3';
import 'nvd3';

@NgModule({
  declarations: [
    AppComponent,
    SwitchDataComponent,
    BarChartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NvD3Module
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
