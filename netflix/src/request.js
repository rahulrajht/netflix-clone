const API_KEY = "19f84e11932abbc79e6d83f82d6d1045";

const request = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated :`/movie/top_rated/?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/tv?api_key=${API_KEY}&with_genres=35`,
    fetchComedyMovies: `/discover/tv?api_key=${API_KEY}&with_genres=27`,
    fetchHorrorMovies: `/discover/tv?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/tv?api_key=${API_KEY}&with_genres=99`,

}
export default request;