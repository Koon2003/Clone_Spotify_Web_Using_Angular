import { Injectable } from "@angular/core";
import { SpotifyConfig } from "../../environments/environment";
import Spotify from 'spotify-web-api-js';
import { IUser } from "../Interfaces/IUser";
import { SpotifyArtistToArtist, SpotifyMusicListToMusicList, SpotifyPlaylistToplaylist, SpotifyUserToUser } from "../common/spotifyHelper";
import { IPlaylist } from "../Interfaces/IPlaylist";
import { Router } from "@angular/router";
import { IArtist } from "../Interfaces/IArtist";
import { IMusic } from "../Interfaces/IMusic";

@Injectable({
    providedIn: 'root'
})

export class SpotifyService {
    spotifyApi: Spotify.SpotifyWebApiJs = null;
    user: IUser;

    async initializeUser() {
        if(!!this.user) {
            return true;
        }
        const token = localStorage.getItem('token');
        if(!token) {
            return false;
        }

        try {
            this.setAccessToken(token);
            await this.getSpotifyUser();
            return !!this.user;
        } catch (error) {
            return false;
        }
    }

    constructor(private router: Router) { 
        this.spotifyApi = new Spotify();
    }

    getUrlLogin() {
        const authEndpoint = `${SpotifyConfig.authEndpoint}`;
        const clientId = `client_id=${SpotifyConfig.clientId}`;
        const redirectUri = `redirect_uri=${SpotifyConfig.redirectUri}`;
        const scopes = `scope=${SpotifyConfig.scopes.join('%20')}`;
        const responseType = `response_type=token&show_dialog=true`;
        return `${authEndpoint}?${clientId}&${redirectUri}&${scopes}&${responseType}`;
    }

    getTokenUrlCallback() {
        if(!window.location.hash) {
            return '';
        }
        const params = window.location.hash.substring(1).split('&');  
        return params[0].split('=')[1];
    }

    setAccessToken(token: string) {
        this.spotifyApi.setAccessToken(token);
        localStorage.setItem('token', token);
    }

    async getSpotifyUser() {
        const userInfo = await this.spotifyApi.getMe();
        this.user = SpotifyUserToUser(userInfo);
    }

    async searchPlaylistUser(offset = 0, limit = 50): Promise<IPlaylist[]> {
        const playlists = await this.spotifyApi.getUserPlaylists(this.user.id, {offset, limit});
        return playlists.items.map(SpotifyPlaylistToplaylist).filter(playlist => playlist !== null);
    }

    async searchTopArtists(limit = 10): Promise<IArtist[]> {
        const artists = await this.spotifyApi.getMyTopArtists({limit});
        return artists.items.map(SpotifyArtistToArtist);
    }

    async searchMusicList(offset = 0, limit = 50): Promise<IMusic[]> {
        const musiclist = await this.spotifyApi.getMySavedTracks({offset, limit});
        return musiclist.items.map(x => SpotifyMusicListToMusicList(x.track));
    }

    async playMusic(musicId: string) {
        await this.spotifyApi.queue(musicId);
        await this.spotifyApi.skipToNext();
    }

    async getMusicCurrent(): Promise<IMusic> {
        const music = await this.spotifyApi.getMyCurrentPlayingTrack();
        return SpotifyMusicListToMusicList(music.item);
    }

    async backMusic() {
        await this.spotifyApi.skipToPrevious();
    }
    async nextMusic() {
        await this.spotifyApi.skipToNext();
    }

    logout() {
        localStorage.clear();
        this.router.navigate(['/login']);
    }
}