const apiKey='43ef83150423f57f7dc079dbef11997a'
const requests={
    fetchTrending:`/trending/all/week?api_key=${apiKey}&language=en-US`,
    fetchNetflixOriginals:`/discover/tv?api_key=${apiKey}&with_networks=213 `,
    fetchActionMovies:`/discover/movie?api_key=${apiKey}&with_genres=28 `,
    fetchComedyMovies:`/discover/movie?api_key=${apiKey}&with_genres=35 `,
    fetchHorrorMovies:`/discover/movie?api_key=${apiKey}&with_genres=27 `,
    fetchRomanceMovies:`/discover/movie?api_key=${apiKey}&with_genres=10749 `,
    fetchDocumantaries:`/discover/movie?api_key=${apiKey}&with_genres=99 `,
    fetchTopRated:`/movie/top_rated?api_key=${apiKey}&language=en-US `,
}
export default requests