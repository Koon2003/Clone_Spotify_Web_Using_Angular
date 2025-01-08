export const environment = {
  production: false
};

export const SpotifyConfig = {
  clientId: '',
  authEndpoint: '',
  redirectUri: '',
  scopes: [
    'user-read-currently-playing', // musica tocando agora.
    'user-read-recently-played', // ler musicas tocadas recentemente
    'user-read-playback-state', // ler estado do player do usuario
    'user-top-read', // top artistas e musicas do usuario
    'user-modify-playback-state', // alterar do player do usuario.
    'user-library-read', // ler biblioteca dos usuarios
    'playlist-read-private', // ler playlists privads
    'playlist-read-collaborative', // ler playlists colaborativas
  ],
};

export const LOGO_URL = 'https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png';

export const BG_IMG_URL = 'https://assets.nflxext.com/ffe/siteui/vlv3/2bcf01ee-7ef6-4930-b0d5-c6863853c461/web/VN-en-20241125-TRIFECTA-perspective_c0e5ba28-a30c-42d7-b382-5df395c70539_small.jpg';

