import { Component } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-comp-a',
  standalone: true,
  imports: [],
  templateUrl: './comp-a.component.html',
  styleUrl: './comp-a.component.css',
})
export class CompAComponent {
  constructor(public counterService: CounterService) {}

  ngOnInit() {
    setTimeout(() => {
      this.counterService.setCounte(0);
      console.log(this.counterService.getCount().value);
    }, 5000);

    this.counterService.count$.subscribe((value) => {
      console.log('notification comp A');
    });
  }

  printCounter() {
    console.log('called from timeout from comp a');
  }
}
