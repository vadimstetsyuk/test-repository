import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    data: any;
    chartCaption: string;
    filename: string;

    constructor(private dataService: DataService) {
        this.chartCaption = `test`;
        this.getData(`chart-data.json`);           
    }

    ngOnInit() {
    }

    getData(filename: string) {
        this.dataService.getChartData(filename).subscribe(data => {
            this.data = data;        
        });
    }

    loadData(filename: string) {
        this.filename = filename;
        this.getData(this.filename);
    }
}