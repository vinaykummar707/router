import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(
    public router: Router,
    private authService: AuthenticationService
  ) {}

  ngOnInit() {}

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
