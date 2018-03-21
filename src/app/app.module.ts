import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { NvD3Module } from 'ng2-nvd3';
import { ChartDataPipe } from './bar-chart/chart-data.pipe';

import { AppComponent } from './app.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { ChartSettingsComponent } from './chart-settings/chart-settings.component';
import { ChartDataService } from './services/chart-data.service';

import 'd3';
import 'nvd3';

@NgModule({
  declarations: [
    AppComponent,
    ChartSettingsComponent,
    BarChartComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    NvD3Module
  ],
  providers: [
    ChartDataService,
    ChartDataPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
