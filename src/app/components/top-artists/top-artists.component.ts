import { Component, OnInit } from '@angular/core';
import { IArtist } from '../../Interfaces/IArtist';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-top-artists',
  templateUrl: './top-artists.component.html',
  styleUrl: './top-artists.component.css',
  standalone: false
})
export class TopArtistsComponent implements OnInit {
  artists: IArtist[] = [];

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit(): void {
    this.getTopArtists();
  }

  async getTopArtists() {
    this.artists = await this.spotifyService.searchTopArtists(5);
  }
}
