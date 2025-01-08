import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { IArtist } from '../../Interfaces/IArtist';
import { newArtist } from '../../common/factories';

@Component({
  selector: 'app-top-artist',
  templateUrl: './top-artist.component.html',
  styleUrl: './top-artist.component.css',
  standalone: false
})
export class TopArtistComponent implements OnInit {

  topArtist: IArtist = newArtist();

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit(): void {
    this.searchTopArtist();
  }

  async searchTopArtist() {
    const artist = await this.spotifyService.searchTopArtists(1); 
    if(!!artist) {
      this.topArtist = artist.pop();
    }
  }
}
