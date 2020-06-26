import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { delay, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-image-move-effect',
  templateUrl: './image-move-effect.component.html',
  styleUrls: ['./image-move-effect.component.scss']
})
export class ImageMoveEffectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // const imgEle = document.getElementsByClassName('img-area')[0];
    // console.log(imgEle);
    // imgEle.scrollTo({
    //   top: 300,
    //   behavior: 'smooth',
    // });

    // imgEle.scrollTo({
    //   left: 300,
    //   behavior: 'smooth',
    // });

    this.setupImageMove();

  }

  private setupImageMove() {
    // 拿到待移動的 image elementList
    const imageList = document.getElementsByClassName('move-img') as HTMLCollectionOf<HTMLImageElement>;

    // 註冊滑鼠移動事件
    const mouseMove = fromEvent(document, 'mousemove');

    // 針對每個 image 做處理
    Array.from(imageList).forEach((value, index) => {

      mouseMove.pipe(

        // 利用 image index 配合 delay 做到每個 image 移動時間點不同 ( index 越大代表在越上面, delay 越少 )
        delay((imageList.length - index) * 100),

        // 滑鼠移動事件轉成 clientX, clientY
        map(event => ({ x: (event as MouseEvent).clientX, y: (event as MouseEvent).clientY })),
      ).subscribe(pos => {

        // 利用 transform 移動 image
        const transX = pos.x - 100;
        const transY = pos.y - 30;
        value.style.transform = 'translate3d(' + transX + 'px, ' + transY + 'px, 0)';
      });
    });
  }

}
