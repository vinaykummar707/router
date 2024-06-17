import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  private count = new BehaviorSubject<number>(5);
  count$ = this.count as Observable<number>;

  constructor() {
    this.count$
  }

  getCount() {
    return this.count;
  }

  setCounte(value: number) {
    this.count.next(value);
  }
}
