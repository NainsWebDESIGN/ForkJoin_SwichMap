import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/timeout';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class ApiService {

    constructor() { }
    TestMap(): Observable<any> {
        return Observable.forkJoin(this.obOne(), this.obTwo(), this.obThree())
            .map(data => {
                let box = [];
                data.forEach(item => box.push({ functionName: 'Map', one: item[0], two: item[1], three: item[2] }));
                return box;
            });
    }
    TestSwitchMap(need: boolean): Observable<any> {
        return Observable.forkJoin(this.obOne(), this.obTwo(), this.obThree())
            .switchMap(data => {
                let box = [];
                data.forEach(item => box.push({ functionName: 'SwitchMap', one: item[0], two: item[1], three: item[2] }));
                return need ? box : [box];
            });
    } obOne() {
        return Observable.of([1, 2, 3]);
    }
    obTwo() {
        return Observable.of([4, 5, 6]);
    }
    obThree() {
        return Observable.of([7, 8, 9]);
    }
}
