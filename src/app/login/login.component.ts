import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(
    public router: Router,
    private authService: AuthenticationService
  ) {}

  login() {
    this.authService.login({ name: 'kevin', id: '01' });
    this.router.navigate(['/home']);
  }
}
