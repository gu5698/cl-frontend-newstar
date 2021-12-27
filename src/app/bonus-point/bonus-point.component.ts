import { Component, OnInit } from '@angular/core';
import { BsJs1Service } from './bs-js1.service';
import { forkJoin, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-bonus-point',
  templateUrl: './bonus-point.component.html',
  styleUrls: ['./bonus-point.component.css']
})
export class BonusPointComponent implements OnInit {
  flexBoxes: string[] = [];
  gridBoxes: string[] = [];

  constructor(
    private bsJs1Service: BsJs1Service,
  ) { }




  ngOnInit() {
    this.getFlexBoxes();
    this.getGridBoxes();
  }

  getFlexBoxes(): void {
    this.flexBoxes = new Array(9).fill('').map((d, i) => (i !== 4)? `f${i+1}`: '')
  }

  getGridBoxes(): void {
    this.gridBoxes = new Array(7).fill('').map((d, i) => `g${i+1}`)
  }

  redirectToKeiPage() {
    location.href = `${location.protocol}//kei.careline.localhost:${location.port}/bonusPoint`
  }

  redirectToAnnPage() {
    location.href = `${location.protocol}//ann.careline.localhost:${location.port}/bonusPoint`
  }

  answerCookie1() {
    //ToDo..
  }

  answerRxjs1() {
    const first$ = of('first' ,  2000).pipe(tap(() => console.log('first')));
    const second$ = of('second', 1500).pipe(tap(() => console.log('second')));;
    const third$ = of('thrid', 800).pipe(tap(() => console.log('thrid')));;

    // 考題限制 : 執行順序需為 : first$ => second$ => third$
    // 預期的Console結果 :
    //  first
    //  second
    //  third

    // ToDo...
    forkJoin(
      first$,
      second$,
      third$
    ).subscribe(d => console.log(d))
  }


  answerJs1() {
    let result: string;
    this.bsJs1Service.getSample()
      .forEachChilds((child) => {
        // ToDo : 實作你的解決方案...
        if (!result) result = ''
        const ary = [...child.parent?.['child'].map(d => d.value).flat(), child.parent.value].join(' , ') 
        result = !result.includes(ary) ? [result, ary].join(' , ').replace(/^ \, /g, '') : result
      });

    // 預期alert的結果 => js 1 answer : child_1_1 , child_1_2 , parent_1 , child_2_1 ,  parent_2 ,child_3_1 , child_3_2 , child_3_3 , parent_3
    alert(`js 1 answer : ${result}`)
  }

}
