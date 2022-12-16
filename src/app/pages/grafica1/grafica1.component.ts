import { Component } from '@angular/core';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [],
})
export class Grafica1Component {
  public labels1: string[] = ['aaaa', 'bbbb', 'cccc'];
  public labels2: string[] = ['dddd', 'eeee', 'ffff'];
  public labels3: string[] = ['gggg', 'hhhh', 'iiii'];
  public data1 = [350, 500, 100];
  public data2 = [234, 456, 234];
  public data3 = [145, 234, 90];
}
