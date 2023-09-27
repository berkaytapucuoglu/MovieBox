const resultBox = document.querySelector(".result-box");
const inputBox = document.querySelector("#input-box");
const filmList = document.querySelector(".film-list");

inputBox.onkeyup = function () {
  filmList.innerHTML = "";
  filmList.classList.add("none");

  let result = [];
  let input = inputBox.value;
  if (input.length) {
    result = NEW_MOVIE_DATA.filter((keyword) => {
      return keyword.Title.toLowerCase().includes(input.toLowerCase());
    });
    display(result);
  }
};

function display(result) {
  return result.map((list) => {
    filmList.classList.remove("none");
    const listImage = document.createElement("img");
    const listElement = document.createElement("li");
    const elementInfo = document.createElement("div");
    const elementYear = document.createElement("p");
    const elementTitle = document.createElement("p");

    listImage.src = list.Poster;
    elementTitle.textContent = list.Title;
    elementYear.textContent = list.Year;
    listElement.appendChild(elementInfo);
    listElement.appendChild(listImage);
    elementInfo.appendChild(elementTitle);
    elementInfo.appendChild(elementYear);
    filmList.appendChild(listElement);
  });
}
