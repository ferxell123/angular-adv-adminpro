import { Component, Input, OnInit } from '@angular/core';
import { Chart, ChartData, ChartEvent, ChartType, Colors } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styleUrls: ['./dona.component.css'],
})
export class DonaComponent implements OnInit {
  @Input() title = 'Sin Título';

  @Input('backgroundColor') backgroundColorDonut: string[] = [];
  @Input('data') dataDonut= [350, 450, 100];
  @Input('labels') doughnutChartLabels: string[] = ['Download Sales','In-Store Sales', 'xxx'];
  constructor() {}

  ngOnInit(): void {
   // Chart.register(Colors);
   this.doughnutChartData.datasets[0].data=this.dataDonut;
   this.doughnutChartData.labels=this.doughnutChartLabels;
  }

  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: this.dataDonut }

    ],
  };

  public doughnutChartType: ChartType = 'doughnut';

  // events
  public chartClicked({
    event,
    active,
  }: {
    event: ChartEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }

  public chartHovered({
    event,
    active,
  }: {
    event: ChartEvent;
    active: {}[];
  }): void {
    console.log(event, active);
  }
}
