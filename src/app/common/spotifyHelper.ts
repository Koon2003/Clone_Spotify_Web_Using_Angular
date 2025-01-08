import { IArtist } from "../Interfaces/IArtist";
import { IMusic } from "../Interfaces/IMusic";
import { IPlaylist } from "../Interfaces/IPlaylist";
import { IUser } from "../Interfaces/IUser";
import { newMusic } from "./factories";
import { addMilliseconds, format} from 'date-fns';

export function SpotifyUserToUser(user: SpotifyApi.CurrentUsersProfileResponse): IUser {
    return {
        id: user.id,
        name: user.display_name,
        imageUrl: user.images.pop().url
    };
}

export function SpotifyPlaylistToplaylist(playlist: SpotifyApi.PlaylistObjectSimplified): IPlaylist {
    if(playlist === null) {
        return null;
    }
    return {
        id: playlist.id,
        name: playlist.name,
        imageUrl: playlist.images.pop().url
    };
}

export function SpotifyArtistToArtist(artist: SpotifyApi.ArtistObjectFull): IArtist {
    return {
        id: artist.id,
        name: artist.name,
        imageUrl: artist.images.sort((a, b) => a.width - b.width).pop().url
    };
}

export function SpotifyMusicListToMusicList(track: SpotifyApi.TrackObjectFull): IMusic {
    if(!track) {
        return newMusic();
    }

    const msForMinutes = (ms: number) => {
        const data = addMilliseconds(new Date(0), ms);
        return format(data, 'mm:ss');
    }

    return {
        id: track.uri,
        title: track.name,
        artists: track.artists.map(artist => {
            return {
                id: artist.id,
                name: artist.name
            };
        }),
        album: {
            id: track.id,
            name: track.album.name,
            imageUrl: track.album.images.shift().url
        },
        time: msForMinutes(track.duration_ms)
    };
}