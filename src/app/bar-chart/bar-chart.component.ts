import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'bar-chart',
    templateUrl: './bar-chart.component.html'
})
export class BarChartComponent implements OnInit {
    @Input() data: any;
    @Input() chartCaption: string;
    options: any;
    screenHeight: number;
    screenWidth: number;    

    constructor() {
        this.screenHeight = Math.round(window.innerHeight * 36.822 / 100);
        this.screenWidth = Math.round(window.innerWidth * 31.77502 / 100);        
    }

    ngOnInit() {
        this.setOptions();
    }

    setOptions() {
        this.options = chartOptions[`multiBarChart`];
        this.options.chart.height = this.screenHeight;
        this.options.chart.width = this.screenWidth;  
    }
}

export const chartOptions = {
    multiBarChart: {
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
            xAxis: {
                axisLabel: '',
                showMaxMin: false,
                tickFormat: function (d) {
                    return convertTime(d);
                }
            },
            yAxis: {
                axisLabel: '',
                axisLabelDistance: -20,
                tickFormat: function (d) {
                    return addThousandsCommas(d);
                }
            }
        }
    }
}

function addThousandsCommas(number) {
    number = number.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(number))
        number = number.replace(pattern, "$1,$2");
    return number;
}

function convertTime(time) {
    // Check correct time format and split into components
    time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

    if (time.length > 1) { // If time format correct
        time = time.slice(1);  // Remove full string match value
        time[5] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
        time[0] = +time[0] % 12 || 12; // Adjust hours
    }
    return time.join(''); // return adjusted time or original string
}