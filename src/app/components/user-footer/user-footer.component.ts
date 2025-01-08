import { Component, OnInit } from '@angular/core';
import { IUser } from '../../Interfaces/IUser';
import { SpotifyService } from '../../services/spotify.service';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user-footer',
  templateUrl: './user-footer.component.html',
  styleUrl: './user-footer.component.css',
  standalone: false,
})
export class UserFooterComponent implements OnInit {
  exitIcone = faSignOutAlt;
  user: IUser = null;

  constructor(private spotifyService: SpotifyService) {}

  ngOnInit(): void {
    this.user = this.spotifyService.user;
  }

  logout() {
    this.spotifyService.logout();
  }
}
