import { TestBed, async, inject } from '@angular/core/testing';
import { ChartDataPipe } from './chart-data.pipe';

describe('Chart data pipe tests : ', () => {
    let pipe: ChartDataPipe;

    beforeEach(() => {
        pipe = new ChartDataPipe();
    });

    it('should create an instance', () => {
        expect(pipe).toBeTruthy();
    });

    it('convertTime function should work with different time formats', () => {
        expect(pipe.convertTime(null)).toBe(``);   
        expect(pipe.convertTime(`00:00`)).toBe(`12:00 AM`);
        expect(pipe.convertTime(`01:00`)).toBe(`1:00 AM`);
        expect(pipe.convertTime(`10:00`)).toBe(`10:00 AM`);
        expect(pipe.convertTime(`11:00`)).toBe(`11:00 AM`);
        expect(pipe.convertTime(`12:00`)).toBe(`12:00 PM`);
        expect(pipe.convertTime(`24:00`)).toBe(`12:00 AM`);
    });

    it('addThousandsCommas function should work with different numbers', () => {
        expect(pipe.addThousandsCommas(null)).toBe(``);
        
        expect(pipe.addThousandsCommas(9999)).toBe(`9,999`);        
        expect(pipe.addThousandsCommas(1000)).toBe(`1,000`);
        expect(pipe.addThousandsCommas(9000)).toBe(`9,000`);
        expect(pipe.addThousandsCommas(200000)).toBe(`200,000`);
        expect(pipe.addThousandsCommas(1000000)).toBe(`1,000,000`);    
        expect(pipe.addThousandsCommas(500)).toBe(`500`);
        expect(pipe.addThousandsCommas(0)).toBe(`0`);        
        expect(pipe.addThousandsCommas(-1)).toBe(`-1`);
        expect(pipe.addThousandsCommas(-1000)).toBe(`-1,000`);
    });
});