import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
import { isNullOrUndefined } from 'util';

@Pipe({
    name: 'chartDataPipe',
    pure: false
})
@Injectable()
export class ChartDataPipe implements PipeTransform {
    constructor() {}

    transform(value: string) : string {
        return this.convertTime(value);
    }

    convertTime(value: string) {
        if (value == null) return '';

        var datePipe = new DatePipe("en-US");

        // Date isn't true because we need only time
        value = datePipe.transform(`December 17, 1995 ${value}`, 'shortTime');
        return value;
    }

    addThousandsCommas(number: number) {
        if (number == null) return '';

        let strNumber: string = number.toString();
        var pattern = /(-?\d+)(\d{3})/;
        while (pattern.test(strNumber))
            strNumber = strNumber.replace(pattern, "$1,$2");
        return strNumber;
    }
}