const NEW_MOVIE_DATA = [
  {
    Title: "Dune",
    Year: "2021",
    imdbID: "8.4/10",
    Type: "Movie",
    Poster: "https://tr.web.img4.acsta.net/pictures/21/10/13/11/52/2707524.jpg",
  },
  {
    Title: "No Time To Die",
    Year: "2021",
    imdbID: "7.6/10",
    Type: "Movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYWQ2NzQ1NjktMzNkNS00MGY1LTgwMmMtYTllYTI5YzNmMmE0XkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_.jpg",
  },
  {
    Title: "Shang-Chi and the Legend of the Ten Rings",
    Year: "2021",
    imdbID: "7.9/10",
    Type: "Movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNTliYjlkNDQtMjFlNS00NjgzLWFmMWEtYmM2Mzc2Zjg3ZjEyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
  },
  {
    Title: "Oppenheimer",
    Year: "2023",
    imdbID: "8.6/10",
    Type: "Movie",
    Poster: "https://tr.web.img2.acsta.net/pictures/23/05/08/09/02/2465323.jpg",
  },
  {
    Title: "Interstellar",
    Year: "2014",
    imdbID: "8.7/10",
    Type: "Movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
  },
  {
    Title: "Inception",
    Year: "2010",
    imdbID: "8.8/10",
    Type: "Movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
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
    imdbID: "tt24228506",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZWQ1MzY4ZDEtOTI2NS00YjJhLThmYjMtYjI3YTMwOWU3MGYxXkEyXkFqcGdeQXVyMTU5ODUxMjIy._V1_SX300.jpg",
  },
  {
    Title: "Elsewhere Starts Here and It's All Happening",
    Year: "2022",
    imdbID: "tt23772878",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BY2FjY2U2N2ItMjc2OC00Y2JhLTkwODAtY2Y0NDBlNzlmNGFkXkEyXkFqcGdeQXVyNDY0MDE0OQ@@._V1_SX300.jpg",
  },
];

const new_innerMovieCards = document.querySelectorAll(".new_movie_card");

new_innerMovieCards.forEach((new_movieCard, index) => {
  const imageObject = document.createElement("img");
  const releaseDateObject = document.createElement("p");
  const titleObject = document.createElement("h2");
  const imdbObject = document.createElement("p");
  const genreObject = document.createElement("p");
  imageObject.src = NEW_MOVIE_DATA[index].Poster;
  releaseDateObject.textContent = NEW_MOVIE_DATA[index].Year;
  titleObject.textContent = NEW_MOVIE_DATA[index].Title;
  imdbObject.textContent = "IMDb: " + NEW_MOVIE_DATA[index].imdbID;
  genreObject.textContent = NEW_MOVIE_DATA[index].Type;
  new_movieCard.appendChild(imageObject);
  new_movieCard.appendChild(releaseDateObject);
  new_movieCard.appendChild(titleObject);
  new_movieCard.appendChild(imdbObject);
  new_movieCard.appendChild(genreObject);
});
