import { Component } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-comp-b',
  standalone: true,
  imports: [],
  templateUrl: './comp-b.component.html',
  styleUrl: './comp-b.component.css',
})
export class CompBComponent {
  constructor(public counterService: CounterService) {}

  ngOnInit() {
    this.counterService.count$.subscribe((value) => {
      console.log(value, 'from b component notification');
    });
  }
}
