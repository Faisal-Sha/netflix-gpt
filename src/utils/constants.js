export const PROFILE_AVATAR = "https://avatars.githubusercontent.com/u/74289907?v=4";

export const LOGO = "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const BACKGROUND_IMG = "https://assets.nflxext.com/ffe/siteui/vlv3/fb5cb900-0cb6-4728-beb5-579b9af98fdd/web/PK-en-20250127-TRIFECTA-perspective_217df22c-add3-44dc-859a-686d5f6f5026_medium.jpg";

export const API_URL = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';

export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY
    }
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;

export const SUPPORTED_LANGUAGES = [
    { identifier: "en", name: "English" },
    { identifier: "hindi", name: "Hindi" },
    { identifier: "spanish", name: "Spanish" },
];