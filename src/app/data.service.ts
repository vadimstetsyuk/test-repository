import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class DataService {
    constructor(private _http: Http) { }

    public getChartData(path: string): Observable<any> {
        return this._http.get(`../assets/${path}`)
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }

    handleError(error: any) {
        return Observable.throw(error.json().error || 'Server error')
    }
}