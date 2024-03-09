import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {

  public counter: number = 0;

  restar(): void {
    this.counter -= 1;
  }

  sumar(): void {
    this.counter += 1;
  }

  reset(): void {
    this.counter = 0;
  }

}
