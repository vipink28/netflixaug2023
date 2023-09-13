const API_KEY = "0d8ab7cff2692bd014bb25fca16d7158";

export const requests = {
    getNetflixOriginals: `discover/tv?api_key=${API_KEY}&language=en-US&with_networks=213`,
    getCollections: (platform, type)=>`${platform}/${type}?api_key=${API_KEY}&language=en-US`,
    getVideoDetails: (video)=>`${video.platform}/${video.id}?api_key=${API_KEY}&language=en-US&append_to_response=videos`
}

export const endpoints = {
    topRated: 'top_rated',
    popular: 'popular',
    nowPlaying: 'now_playing',
    upcoming: 'upcoming',
    airingToday: 'airing_today',
    onTheAir: 'on_the_air'
}

export const platforms = {
    tv: 'tv',
    movie: 'movie'
}