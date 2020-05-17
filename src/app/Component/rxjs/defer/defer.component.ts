import { Component, OnInit } from '@angular/core';
import { of, defer } from 'rxjs';
import { tap } from 'rxjs/operators';
// declare var $: any;

@Component({
  selector: 'app-defer',
  templateUrl: './defer.component.html',
  styleUrls: ['./defer.component.scss']
})
export class DeferComponent implements OnInit {

  // 延遲 API 取值時間點
  private of$ = of(
    Math.floor(Math.random() * 100)
  );

  private defer$ = defer(() =>
    of(
      Math.floor(Math.random() * 100)
    )
  );

  // 延遲 jQuery get
  // private get$ = $.get('https://www.google.com');

  // private deferGet$ = defer(() =>
  //   $.get('https://www.google.com')
  // );

  ngOnInit(): void {

    // 無使用 defer, 在建立 Observable 時就決定 random 數值了
    for (let i of [1, 2, 3]) {
      this.of$.pipe(
        tap(x => console.log('of$: ', x))
      ).subscribe();
      // (3) of$:  96
    }

    // 使用 defer, 在 subscribe Observable 當下才決定 random 數值
    for (let i of [1, 2, 3]) {
      this.defer$.pipe(
        tap(x => console.log('defer$: ', x))
      ).subscribe();
      // defer$:  11
      // defer$:  75
      // defer$:  69
    }







  }

}
