import { Component } from '@angular/core';
import { ChartDataService } from './services/chart-data.service';

@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: './app.component.html'
})
export class AppComponent {
    data: any;
    currentSource: any;

    constructor(private chartDataService: ChartDataService) {
        this.data = [];
        this.currentSource = {};
    }

    getData(filename: string) {
        this.chartDataService.getData(filename).subscribe(data => {
            this.data = data;
        });
    }

    onDataChange(dataSource: any) {
        this.currentSource = dataSource;
        this.getData(dataSource.path);
    }
}