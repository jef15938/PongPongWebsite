import { Component, OnInit } from '@angular/core';
import { from, Observer } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-from',
  templateUrl: './from.component.html',
  styleUrls: ['./from.component.scss']
})
export class FromComponent implements OnInit {

  // 將可展開的物件轉成 Observable, 並 complete

  private baseObserver: Observer<any> = {
    next: (value) => console.log('next: ', value),
    complete: () => console.log('complete'),
    error: (err) => console.log('error: ', err)
  };



  // array
  private fromArray = from([1, 2, 3]);

  // promise
  private fromPromise = from(Promise.resolve(1))

  // string
  private fromString = from('Hello World!');

  // map 
  private fromMap = from(this.getMap());



  constructor() { }

  ngOnInit(): void {
    // this.fromArray.subscribe(
    //   this.baseObserver
    // );

    // this.fromPromise.subscribe(
    //   this.baseObserver
    // );

    // this.fromString.subscribe(
    //   this.baseObserver
    // );

    // this.fromMap.subscribe(
    //   this.baseObserver
    // );

    function* generateDoubles(seed) {
      let i = seed;
      while (true) {
        yield i;
        i = 2 * i; // double it
      }
    }

    // const iterator = generateDoubles(3);
    // const result = from(iterator).pipe(take(3))

    // result.subscribe(console.log);




  }

  private getMap(): Map<number, string> {
    let map: Map<number, string> = new Map<number, string>();
    map.set(1, 'one');
    map.set(2, 'two'),
      map.set(3, 'three');
    return map;
  }


}
