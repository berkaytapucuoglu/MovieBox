const VIDEO_DATA = [
  {
    Poster: "https://i.ytimg.com/vi/hnEwJKVWjFM/maxresdefault.jpg",
  },
  {
    Poster: "https://i.ytimg.com/vi/l-umG06tKGU/maxresdefault.jpg",
  },
  {
    Poster:
      "https://i.ytimg.com/vi/RV53zIsf0ks/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDtKPfSOpYn1OFFnxhlsaeBYXtm3A",
  },
  {
    Poster: "https://i.ytimg.com/vi/W01L70IGBgE/maxresdefault.jpg",
  },
  {
    Poster: "https://i.ytimg.com/vi/aJJrkyHas78/maxresdefault.jpg",
  },
  {
    Poster: "https://i.ytimg.com/vi/11ZozKfRqvA/maxresdefault.jpg",
  },
  {
    Poster: "https://i.ytimg.com/vi/d9MyW72ELq0/maxresdefault.jpg",
  },
  {
    Poster:
      "https://www.isfdm.com/uploads/2022/12/23/videos/oppenheimer-official-trailer-video-fragman-640-360.jpg",
  },
  {
    Poster:
      "https://www.isfdm.com/uploads/2021/10/videos/the-wolf-of-wall-street-official-trailer-video-fragman-00ac8e-640-360.webp",
  },
];

const innerVideoCards = document.querySelectorAll(".video_card");

innerVideoCards.forEach((VideoCard, index) => {
  const imageObject = document.createElement("img");

  imageObject.src = VIDEO_DATA[index].Poster;

  VideoCard.appendChild(imageObject);
});
