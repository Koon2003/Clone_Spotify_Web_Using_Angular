import { Component, OnDestroy, OnInit } from '@angular/core';
import { IMusic } from '../../Interfaces/IMusic';
import { newMusic } from '../../common/factories';
import { Subscription } from 'rxjs';
import { faS, faStepBackward, faStepForward } from '@fortawesome/free-solid-svg-icons';
import { PlayerService } from '../../services/player.service';

@Component({
  selector: 'app-player-card',
  templateUrl: './player-card.component.html',
  styleUrl: './player-card.component.css',
  standalone: false
})
export class PlayerCardComponent implements OnInit, OnDestroy {

  music: IMusic = newMusic();
  subs: Subscription[] = [];
  // Icon
  prevIcon = faStepBackward;
  nextIcon = faStepForward;

  constructor(private playerService: PlayerService) { }

  ngOnDestroy(): void {
    this.subs.forEach(sub => sub.unsubscribe());
  }

  ngOnInit(): void {
  }

  backMusic() {
    this.playerService.backMusic();
  }
  nextMusic() {
    this.playerService.nextMusic();
  }
}
