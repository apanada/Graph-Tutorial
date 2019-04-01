import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // Is a user logged in?
  authenticated: boolean;
  // The user
  user: any;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authenticated = false;
    this.user = {};
  }

  async signIn(): Promise<void> {
    await this.authService.signIn();
  }
}
