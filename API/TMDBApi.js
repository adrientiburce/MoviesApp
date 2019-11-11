const API_TOKEN = 'ba6c23d50b2176a4edf8478a8d35f8bd';

const fetFromApi = (url) => {
    return fetch(url)
        .then((response) => response.json())
        .catch(error => console.error(error))
};


export function getFilmsFromApiWithSearchedText(text, page) {
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text + '&page=' + page;
    return fetFromApi(url);
}

export function getTrendingFilms() {
    const url = 'https://api.themoviedb.org/3/trending/all/day?api_key=' + API_TOKEN + '&language=fr';
    return fetFromApi(url);
}


export function getImageFromApi(name) {
    return 'https://image.tmdb.org/t/p/w300' + name;
}
