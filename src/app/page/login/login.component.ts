import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  standalone: false
})

export class LoginComponent implements OnInit {
  constructor(
    private spotifyService: SpotifyService,
    private router: Router
  ) { }

  ngOnInit(): void { 
    this.checkTokenUrlCallback();
  }

  checkTokenUrlCallback() {
    const token = this.spotifyService.getTokenUrlCallback();
    if(!!token) {
      this.spotifyService.setAccessToken(token);
      this.router.navigate(['/player']);
    }
  }
  
  login(): void {
    window.location.href = this.spotifyService.getUrlLogin();
  }
}
