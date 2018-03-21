import { TestBed, async, inject } from '@angular/core/testing';
import { ChartDataService } from './chart-data.service';
import { HttpModule, Http, BaseRequestOptions, XHRBackend } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

describe('Data Service Tests : ', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpModule
            ],
            providers: [
                ChartDataService,
                { provide: XHRBackend, useClass: MockBackend }
            ]
        });
        TestBed.compileComponents();
    });

    it('Should return an exception when path to file is not provided', () => {
        inject([ChartDataService], (dataService) => {
            expect(() => {
                dataService.getData(null)
            }).toThrowError();
        });
    });

    it('Should return an array of object data1', () => {
        inject([ChartDataService], (dataService) => {
            dataService.getData(`data1.json`).subscribe((data) => {             
                expect(data.length).toBe(1);
                expect(data[0].key).toEqual('Data1');
                expect(data[0].values.length).toBe(23);
            });
        });
    });
});