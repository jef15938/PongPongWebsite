import { Component, OnInit } from '@angular/core';
import { EMPTY, interval, of, Observer, empty } from 'rxjs';
import { startWith, mergeMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-empty',
  templateUrl: './empty.component.html',
  styleUrls: ['./empty.component.scss']
})
export class EmptyComponent implements OnInit {

  private baseObserver: Observer<any> = {
    next: (value) => console.log('next: ', value),
    complete: () => console.log('complete'),
    error: (err) => console.log('error: ', err)
  };

  private timer1 = interval(2000).pipe(
    map(x => `t1: ${x}`)
  );
  private timer2 = interval(1000).pipe(
    map(x => `t2: ${x}`)
  );;

  constructor() { }

  ngOnInit(): void {

    // this.timer1.subscribe(
    //   this.baseObserver
    // );

    // this.timer2.subscribe(
    //   this.baseObserver
    // );

    // this.timer1.pipe(
    //   mergeMap((t1) => of(1,2,3).pipe(
    //     map(t2 => `t1t2: ${t1}, ${t2}`)
    //   )),
    // ).subscribe(this.baseObserver);

    empty().subscribe(
      this.baseObserver
    );

    // of(1,23,4444).subscribe(
    //   this.baseObserver
    // )


    empty().pipe(
      startWith(666)
    ).subscribe(
      this.baseObserver
    )



    const interval$ = interval(1000);
    const result = interval$.pipe(
      mergeMap(x => x % 2 === 1 ? of('a', 'b', 'c') : empty()),
    );
    result.subscribe(x => console.log(x));

    // const letters = of('a', 'b', 'c');
    // const result = letters.pipe(
    //   mergeMap(x => of('1', '2', '3').pipe(map(i => x + i))),
    // );
    // result.subscribe(x => console.log(x));
  }

}
