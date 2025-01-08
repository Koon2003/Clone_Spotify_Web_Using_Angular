import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faGuitar, faHome, faMusic, faSearch } from '@fortawesome/free-solid-svg-icons';
import { SpotifyService } from '../../services/spotify.service';
import { IPlaylist } from '../../Interfaces/IPlaylist';

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrl: './left-panel.component.css',
  standalone: false
})

export class LeftPanelComponent implements OnInit {
  menuSelected = 'Home';
  playlists: IPlaylist[] = [];

  // Icons
  homeIcone = faHome;
  searchIcone = faSearch;
  artistIcone = faGuitar;
  playlistIcone = faMusic;


  constructor(
    private router: Router,
    private spotifyService: SpotifyService
  ) { }

  ngOnInit(): void {
    this.searchPlaylists();
  }

  buttonClick(button: string) {
    this.menuSelected = button;
    this.router.navigateByUrl('player/home');
  }

  async searchPlaylists() {
    this.playlists = await this.spotifyService.searchPlaylistUser();
  }
}

//Service
//BehaviorSubject
//MetaService
//title service