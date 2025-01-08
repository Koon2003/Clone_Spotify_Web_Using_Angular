import { IArtist } from "../Interfaces/IArtist";
import { IMusic } from "../Interfaces/IMusic";


export function newArtist(): IArtist {
    return {
        id: '',
        name: '',
        imageUrl: ''
    }
}

export function newMusic(): IMusic {
    return {
        id: '',
        title: '',
        artists: [],
        album: {
            id: '',
            name: '',
            imageUrl: ''
        },
        time: ''
    }
}