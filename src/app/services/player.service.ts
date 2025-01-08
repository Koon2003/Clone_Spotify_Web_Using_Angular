import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { newMusic } from "../common/factories";
import { IMusic } from "../Interfaces/IMusic";
import { SpotifyService } from "./spotify.service";

@Injectable({
    providedIn: 'root'
})

export class PlayerService {

    musicCurrent = new BehaviorSubject<IMusic>(newMusic());
    timeId: any = null;

    constructor(private spotifyService: SpotifyService) { 
        this.getMusicCurrent();
    }

    async getMusicCurrent() {
        clearTimeout(this.timeId);

        const music = await this.spotifyService.getMusicCurrent();
        this.setCurrentMusic(music);

        this.timeId = setTimeout(async () => {
            await this.getMusicCurrent();
        }, 5000);
    }

    setCurrentMusic(music: IMusic) {
        this.musicCurrent.next(music);
    }

    async backMusic() {
        await this.spotifyService.backMusic();
    }
    async nextMusic() {
        await this.spotifyService.nextMusic();
    }
}