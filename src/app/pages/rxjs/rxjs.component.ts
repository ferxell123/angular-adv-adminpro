import { Component, OnDestroy } from '@angular/core';
import { TimeScale } from 'chart.js';
import {
  filter,
  interval,
  map,
  Observable,
  retry,
  Subscription,
  take,
} from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css'],
})
export class RxjsComponent implements OnDestroy {
  public intervalSubs: Subscription;

  constructor() {
    /*
    this.retornaObservable().pipe(retry (1) ) .subscribe({
      next: (v) => console.log('Subs:', v),
      error: (error) => console.warn('Error', error),
      complete: () => console.info('Terminado'),
    });

*/
    //this.retornaIntervalo().subscribe({next: (v)=>console.log(v)});

    this.intervalSubs = this.retornaIntervalo().subscribe(console.log);
  }
  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe();
  }

  retornaIntervalo(): Observable<number> {
    return interval(100).pipe(
      //take(10),
      map((valor) => valor + 1),
      filter((valor) => valor % 2 === 0)
    );
  }

  retornaObservable(): Observable<number> {
    let i = -1;
    return new Observable<number>((observer) => {
      const interval = setInterval(() => {
        i++;
        observer.next(i);
        if (i === 4) {
          clearInterval(interval);
          observer.complete();
        }

        if (i === 2) {
          observer.error('i llego al valor de 2');
        }
      }, 1000);
    });
  }
}
