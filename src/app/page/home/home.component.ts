import { Component, OnDestroy, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { IMusic } from '../../Interfaces/IMusic';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { newMusic } from '../../common/factories';
import { PlayerService } from '../../services/player.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  standalone: false
})
export class HomeComponent implements OnInit, OnDestroy {
  musicList: IMusic[] = [];
  musicCurrent: IMusic = newMusic();

  playIcon = faPlay;

  subs: Subscription[] = [];

  constructor(
    private spotifyService: SpotifyService,
    private playerService: PlayerService
  ) { }

  ngOnDestroy(): void {
    this.subs.forEach(sub => sub.unsubscribe());
  }

  ngOnInit(): void {
    this.getMusicList();
    this.getMusicCurrent();
  }

  async getMusicList() {
    this.musicList = await this.spotifyService.searchMusicList();
  }

  getMusicCurrent() {
    const sub = this.playerService.musicCurrent.subscribe(music => {
      this.musicCurrent = music;
    });
    this.subs.push(sub);
  }

  getArtistsName(music: IMusic) {
    return music.artists.map(artist => artist.name).join(', ');
  }

  async playMusic(music: IMusic) {
    await this.spotifyService.playMusic(music.id);
    this.playerService.setCurrentMusic(music);
  }
}
