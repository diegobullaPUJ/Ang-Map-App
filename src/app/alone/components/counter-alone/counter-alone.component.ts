import { Component } from '@angular/core';

@Component({
  selector: 'counter-alone',
  standalone: true,
  templateUrl: './counter-alone.component.html',
  styleUrls: ['./counter-alone.component.css']
})
export class CounterAloneComponent {

  public counter: number = 10;

}
