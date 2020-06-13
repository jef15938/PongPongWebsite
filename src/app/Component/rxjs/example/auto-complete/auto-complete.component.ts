import { Component, OnInit } from '@angular/core';
import { fromEvent, from } from 'rxjs';
import { map, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import * as _ from 'date-fns';

@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.scss']
})
export class AutoCompleteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.autoCompleteUntilMS(1000);
  }

  private autoCompleteUntilMS(ms: number) {

    const input = document.getElementsByClassName('auto-complete-input')[0];
    const listenInput = fromEvent(input, 'input');

    listenInput.pipe(

      //map 不加的話, distinctUntilChanged會直接用input event 來比較, 所以每次都判斷不一樣
      map(event => (<any>event).target.value),

      //debounceTime 要先放, 再放distinctUntilChanged。對調的話就算1秒內結果的字一樣，還是會 emit 出去
      debounceTime(ms),

      //如果值跟上次不一樣才 emit
      distinctUntilChanged(),
      
    ).subscribe((result)=>{
      document.getElementsByClassName('auto-complete-result')[0].innerHTML = `Value: ${result}<br/>Time: ${_.format(new Date(), 'HH:MM:SS')}`;
    })
  }

}
