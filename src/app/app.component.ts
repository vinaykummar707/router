import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CompAComponent } from './comp-a/comp-a.component';
import { CompBComponent } from './comp-b/comp-b.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CompAComponent, CompBComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'projState';

  ngOnInit() {}
}
