import { Component, OnInit, Input } from '@angular/core';
// import { ChartOptions } from './chart-options';
import { ChartDataPipe } from './chart-data.pipe';


@Component({
    selector: 'bar-chart',
    templateUrl: './bar-chart.component.html'
})
export class BarChartComponent implements OnInit {
    @Input() data: any;
    @Input() chartCaption: string;
    options: any;

    constructor(private _chartDataPipe: ChartDataPipe) { }

    ngOnInit() {
        this.setOptions();
    }

    setOptions() {       
        this.options = {
            chart: {
                type: 'multiBarChart',
                height: 300,
                width: 300,
                margin: {
                    top: 20,
                    right: 20,
                    bottom: 45,
                    left: 45
                },
                clipEdge: true,
                staggerLabels: true,
                duration: 500,
                stacked: true,
                showLegend: false,
                showControls: false,
                xAxis: {
                    axisLabel: '',
                    showMaxMin: false,
                    tickFormat: (d) => {
                        return this._chartDataPipe.convertTime(d);
                    }
                },
                yAxis: {
                    axisLabel: '',
                    axisLabelDistance: -20,
                    tickFormat: (d) => {
                        return this._chartDataPipe.addThousandsCommas(d);
                    }
                }
            }
        };
        let customHeight = Math.round(window.innerHeight * 36.822 / 100);
        let customWidth = Math.round(window.innerWidth * 31.77502 / 100);
        this.options.chart.height = customHeight;
        this.options.chart.width = (customWidth > 250) ? customWidth : 250;
    }
}