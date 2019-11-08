import { vegetables } from "./array";

function findVeg(veg) {
  return veg.location === location.search;
}
function getSingleVeg() {
  const foundVeg = vegetables.find(findVeg);
  return foundVeg;
}
console.log(getSingleVeg().name);

const detailWrapper = document.querySelector(".detail-wrapper");

function pageRender() {
  const veggy = getSingleVeg();
  console.log(veggy);
  const content = `

      <div class="details-container">
        <div class="details-container__img">
          <img
            src="${veggy.pic}"
            alt="${veggy.name}"
          />
        </div>
        <div class="details-container__description">
        ${veggy.description}
        </div>
      </div>
      <div class="info-box">
        <ul>
          <li>Season: <span>may - june</span></li>
          <li>Vitamin: <span>A, C, E</span></li>
          <li>
            Favorite recipe:
            <span
              ><a
                href="https://www.chefkoch.de/rezepte/3059651458565990/Brokkoli-aus-der-Pfanne.html"
                >broccoli a la plancha</a
              ></span
            >
          </li>
          <li>origin: <span>anatolia</span></li>
        </ul>
      </div>
  `;
  detailWrapper.innerHTML = content;
}
pageRender();

// function renderPage(content) {
//   return content;
// }
// renderPage(detailContent);
