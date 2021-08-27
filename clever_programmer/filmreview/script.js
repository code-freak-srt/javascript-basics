let movies = [{
        title: "Fight Club",
        rank: 10,
        id: "tt01"
    },
    {
        title: "shawshank redemption",
        rank: 9,
        id: "tt02"
    },
    {
        title: "Lord of the rings",
        rank: 8,
        id: "tt03"
    },
    {
        title: "Game of Thrones",
        rank: 7,
        id: "tt04"
    },
    {
        title: "Loot",
        rank: 6,
        id: "tt05"
    },
    {
        title: "Kabaddi",
        rank: 5,
        id: "tt06"
    },
    {
        title: "cha ekan cha",
        rank: 4,
        id: "tt07"
    },
]
window.onload = function() {
    let sortedMovies = sortMoviesByRank(movies);
    displayMovies(movies);
}

function sortMoviesByRank(movies) {
    for (let j = 0; j < movies.length; j++) {
        let max_obj = movies[j];
        let max_location = j;
        for (let i = j; i < movies.length; i++) {
            if (movies[i].rank > max_obj.rank) {
                max_obj = movies[i];
                max_location = i;
            }
        }
        movies[max_location] = movies[j];
        movies[j] = max_obj;
    }
    return movies;
}