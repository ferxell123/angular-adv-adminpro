import { ActivationEnd, Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { filter, map, Subscription } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [],
})
export class BreadcrumbsComponent implements OnInit, OnDestroy{
  public titulo: string = '';
  public tituloSubs$: Subscription = new Subscription;
  constructor(private router: Router) {
    this.tituloSubs$=this.getArgumentosRuta().subscribe(({ titulo }) => {
      this.titulo = titulo;
      document.title = `Admin Pro - ${titulo}`;
    });;
  }
  ngOnDestroy(): void {
    this.tituloSubs$.unsubscribe();
  }

  ngOnInit(): void {}

  getArgumentosRuta() {
    return this.router.events
      .pipe(
        filter(
          (event): event is ActivationEnd => event instanceof ActivationEnd
        ),
        filter((event: ActivationEnd) => event.snapshot.firstChild === null),
        map((event: ActivationEnd) => event.snapshot.data)
      )

  }
}
