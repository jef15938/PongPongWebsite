import { Component, OnInit } from '@angular/core';
import { Observable, generate, fromEvent, from } from 'rxjs';

@Component({
  selector: 'app-generate-fibonacci',
  templateUrl: './generate-fibonacci.component.html',
  styleUrls: ['./generate-fibonacci.component.scss']
})
export class GenerateFibonacciComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.generateFibonacci().subscribe(console.log);
    // from(this.generateFibonacciByGenerator()).subscribe(console.log);
  }


  /**
   * 使用 rxjs generate 產生斐波那契數列
   *
   * @private
   * @returns {Observable<{ index: number, result: number }>}
   * @memberof GenerateFibonacciComponent
   */
  private generateFibonacci(): Observable<{ index: number, result: number }> {
    return generate(

      // 初始值: 陣列第一個結果
      { result: 1, fir: 0, sec: 1, index: 1 },

      // 檢查條件: 如果數值小於等於 js 安全數值
      x => x.result <= Number.MAX_SAFE_INTEGER,

      // 符合檢查條件做什麼: 做斐波那契邏輯運算
      x => {
        x.index++;
        x.result = x.fir + x.sec;
        x.fir = x.sec;
        x.sec = x.result;
        return x;
      },

      // 回傳結果: 把 index, result 做成物件並回傳
      x => ({ index: x.index, result: x.result })
    );
  }


  /**
   * 使用 ES6 generator 產生斐波那契數列
   *
   * @private
   * @memberof GenerateFibonacciComponent
   * 以 * 與 functionName 連接, 並以 yield 當作回傳的數值
   */
  private *generateFibonacciByGenerator() {
    let index = 0;
    let f1 = 1;
    let f2 = 0;
    let result = 0;

    // 做斐波那契邏輯運算
    while (true) {
      index++;
      result = f1 + f2;
      f1 = f2;
      f2 = result;

      // 檢查條件: 如果數值大於 js 安全數值, 跳出回圈
      if (result > Number.MAX_SAFE_INTEGER) {
        break;
      }
      // tslint:disable-next-line: object-literal-shorthand
      yield { index: index, result: result };
    }
  }


}
