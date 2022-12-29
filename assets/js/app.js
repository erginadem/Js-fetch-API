import { searchShows } from "./modules/tvmaze.js";

document.getElementById("txtSearch").addEventListener("input", (e) => {
  const query = e.target.value;
  if (!query || query.length < 3) {
    return (document.getElementById("tvShows").innerHTML = "");
  }
  createShows(query);
});

const createShows = (query) => {
  searchShows(query, (shows) => {
    let strShows = "";

    shows.forEach((item) => {
      strShows += createShowHTML(item);
    });
    document.getElementById("tvShows").innerHTML = strShows;
  });
};

const createShowHTML = (item) => {
  const { image, name, genres } = item.show;

  return `
          <div class="col-md-4">
              <div class="card h-100">
                  <img src="${image.medium}" class="card-img-top" alt="..." />
              <div class="card-body">
              <h5 class="card-title">${name}</h5>
              <p class="card-text">${genres.join("-")}</p>
              </div>
              </div>
          </div>
          `;
};
