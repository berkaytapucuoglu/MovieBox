const MOVIE_DATA = [
  {
    Title: "Batman Begins",
    Year: "2005",
    imdbID: "8.2/10",
    Type: "Movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
  },
  {
    Title: "Batman v Superman: Dawn of Justice",
    Year: "2016",
    imdbID: "6.5/10",
    Type: "Movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
  },
  {
    Title: "The Batman",
    Year: "2022",
    imdbID: "7.8/10",
    Type: "Movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_SX300.jpg",
  },
  {
    Title: "Batman",
    Year: "1989",
    imdbID: "7.5/10",
    Type: "Movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_SX300.jpg",
  },
  {
    Title: "Batman Returns",
    Year: "1992",
    imdbID: "7.1/10",
    Type: "Movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGZmYzVkMmItM2NiOS00MDI3LWI4ZWQtMTg0YWZkODRkMmViXkEyXkFqcGdeQXVyODY0NzcxNw@@._V1_SX300.jpg",
  },
  {
    Title: "Batman & Robin",
    Year: "1997",
    imdbID: "3.8/10",
    Type: "Movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMGQ5YTM1NmMtYmIxYy00N2VmLWJhZTYtN2EwYTY3MWFhOTczXkEyXkFqcGdeQXVyNTA2NTI0MTY@._V1_SX300.jpg",
  },
  {
    Title: "Batman Forever",
    Year: "1995",
    imdbID: "5.4/10",
    Type: "Movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDdjYmFiYWEtYzBhZS00YTZkLWFlODgtY2I5MDE0NzZmMDljXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "The Lego Batman Movie",
    Year: "2017",
    imdbID: "7.3/10",
    Type: "Movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTcyNTEyOTY0M15BMl5BanBnXkFtZTgwOTAyNzU3MDI@._V1_SX300.jpg",
  },
  {
    Title: "Batman: The Animated Series",
    Year: "1992–1995",
    imdbID: "9.0/10",
    Type: "Series",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTM3MTRkZjQtYjBkMy00YWE1LTkxOTQtNDQyNGY0YjYzNzAzXkEyXkFqcGdeQXVyOTgwMzk1MTA@._V1_SX300.jpg",
  },
  {
    Title: "Batman v Superman: Dawn of Justice (Ultimate Edition)",
    Year: "2016",
    imdbID: "6.6/10",
    Type: "Movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTRlNWQwM2ItNjkyZC00MGI3LThkYjktZmE5N2FlMzcyNTIyXkEyXkFqcGdeQXVyMTEyNzgwMDUw._V1_SX300.jpg",
  },
  {
    Title: "Making 100 Friends from All Over the World",
    Year: "2019",
    imdbID: "8.2/10",
    Type: "Movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZWQ1MzY4ZDEtOTI2NS00YjJhLThmYjMtYjI3YTMwOWU3MGYxXkEyXkFqcGdeQXVyMTU5ODUxMjIy._V1_SX300.jpg",
  },
  {
    Title: "Elsewhere Starts Here and It's All Happening",
    Year: "2022",
    imdbID: "8.5/10",
    Type: "Movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BY2FjY2U2N2ItMjc2OC00Y2JhLTkwODAtY2Y0NDBlNzlmNGFkXkEyXkFqcGdeQXVyNDY0MDE0OQ@@._V1_SX300.jpg",
  },
];

const innerMovieCards = document.querySelectorAll(".movie_card");

innerMovieCards.forEach((movieCard, index) => {
  const imageObject = document.createElement("img");
  const releaseDateObject = document.createElement("p");
  const titleObject = document.createElement("h2");
  const imdbObject = document.createElement("p");
  const genreObject = document.createElement("p");
  imageObject.src = MOVIE_DATA[index].Poster;
  releaseDateObject.textContent = MOVIE_DATA[index].Year;
  titleObject.textContent = MOVIE_DATA[index].Title;
  imdbObject.textContent = "IMDb: " + MOVIE_DATA[index].imdbID;
  genreObject.textContent = MOVIE_DATA[index].Type;
  movieCard.appendChild(imageObject);
  movieCard.appendChild(releaseDateObject);
  movieCard.appendChild(titleObject);
  movieCard.appendChild(imdbObject);
  movieCard.appendChild(genreObject);
});
