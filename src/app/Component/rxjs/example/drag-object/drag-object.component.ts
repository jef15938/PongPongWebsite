import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { takeUntil, tap, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-drag-object',
  templateUrl: './drag-object.component.html',
  styleUrls: ['./drag-object.component.scss']
})
export class DragObjectComponent implements OnInit {

  public title: string = 'DragObject';
  public squareElement: HTMLElement;
  public rightAreaElement: HTMLElement;

  constructor() { }

  ngOnInit(): void {

    this.squareElement = document.getElementById('square');

    // 使用 fromEvent 產生 observable 訂閱行為
    const squareListenMousedown$ = fromEvent(this.squareElement, 'mousedown');
    const mousemove$ = fromEvent(document, 'mousemove');
    const mouseup$ = fromEvent(document, 'mouseup');

    // mousedown 當作訂閱起點
    squareListenMousedown$.pipe(

      // 將 mousedown 轉成 mousemove
      switchMap(() => mousemove$.pipe(

        // 訂閱 mousemove 直到 mouseup
        takeUntil(mouseup$),

        // 針對 mousemove event 做處理
        tap((mouseEvent) => {

          // 根據 mouseEvent 拿到 movementX, movementX 並將物體移動到該點
          const movementX = (<MouseEvent>mouseEvent).movementX;
          const movementY = (<MouseEvent>mouseEvent).movementY;
          this.moveByMouseEvent(this.squareElement, movementX, movementY);
        })
      ))
    ).subscribe();

  }

  private moveByMouseEvent(ele: HTMLElement, movementX: number, movementY: number) {
    if (!!ele) {
      // let left = this.squareElement.offsetLeft + (<MouseEvent>mouseEvent).movementX;
      // let top = this.squareElement.offsetTop + (<MouseEvent>mouseEvent).movementY;

      const left = this.squareElement.offsetLeft + movementX;
      const top = this.squareElement.offsetTop + movementY;

      ele.style.left = left + 'px';
      ele.style.top = top + 'px';
    }

  }

}
