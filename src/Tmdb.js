/* eslint-disable import/no-anonymous-default-export */

const API_KEY= process.env.REACT_APP_API_KEY
const API_BASE = process.env.REACT_APP_API_BASE

const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}

export default {
    getHomeList: async () => {
        return [
            {
                slug: 'originals',
                title: 'Originais do Netflix',
                items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'trending',
                title: 'Recomendados para você',
                items: await basicFetch(`/trending/all/week?with_network=213&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'toprated',
                title: 'Em alta',
                items: await basicFetch(`/movie/top_rated?with_network=213&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'action',
                title: 'Ação',
                items: await basicFetch(`/discover/movie?with_network=28&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                items: await basicFetch(`/discover/movie?with_network=35&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await basicFetch(`/discover/movie?with_network=27&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: await basicFetch(`/discover/movie?with_network=10749&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'documentary',
                title: 'Documentários',
                items: await basicFetch(`/discover/movie?with_network=99&language=pt-BR&api_key=${API_KEY}`)
            },
        ];
    },
    // getMovieInfo2: async(movieId, type) => {
    //     let info = {};

    //     if(movieId){
    //         switch(type){
    //             case 'movie':
    //                 info = await basicFetch(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`);
    //             break;
    //             case 'tv':
    //                 info = await basicFetch(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`);
    //             break;
    //             default:
    //             break;
    //         }
    //     }

    //     return info;
    // },

    getMovieInfo: async(movieId, type) => ({
        'movie': await basicFetch(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`),
        'tv': await basicFetch(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`),
    }[type] || 'Nenhum filme encontrado')

}


