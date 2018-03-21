/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ChartSettingsComponent } from './chart-settings/chart-settings.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';

import { HttpModule } from '@angular/http';
import { NvD3Module } from 'ng2-nvd3';

import { ChartDataService } from './services/chart-data.service';
import { ChartDataPipe } from './bar-chart/chart-data.pipe';

import 'd3';
import 'nvd3';

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule,
        NvD3Module
      ],
      declarations: [
        AppComponent,
        ChartSettingsComponent,
        BarChartComponent
      ],
      providers: [
        ChartDataService,
        ChartDataPipe
      ]
    });
    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
