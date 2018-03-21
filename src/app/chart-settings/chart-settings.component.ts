import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'chart-settings',
    templateUrl: './chart-settings.component.html'
})
export class ChartSettingsComponent implements OnInit {
    @Output() onChangeDataSource: EventEmitter<any>;
    dataSources: Array<any>;
    currentSourceIndex: number;

    constructor() {
        this.onChangeDataSource = new EventEmitter();
        this.currentSourceIndex = 0;
        this.dataSources = [
            { caption: 'Data 1', path: 'data1.json' },
            { caption: 'Data 2', path: 'data2.json' },
            { caption: 'Data 3', path: 'data3.json' }
        ];
    }

    ngOnInit() {
        this.changeDataSource(this.dataSources[this.currentSourceIndex]);
    }

    changeDataSource(source: any) {
        this.currentSourceIndex = this.dataSources.indexOf(source);
        this.onChangeDataSource.emit(source);
    }
}