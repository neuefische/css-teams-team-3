import { vegetables } from "./lib/array";

const container = document.querySelector(".container");

vegetables.forEach(function(result) {
  const content = `
  <div class="card-element">
    <div class="card-element__headline">
      <h2>${result.name}</h2>
    </div>
    <div class="card-element__main">
      <div class="card-element__img">
        <img
          src="${result.pic}"
          alt="${result.name}"
        />
      </div>

      <div class="card-element__content">
        <p>
          ${result.description}
        </p>
        <button><a href="/details.html?${result.name}">details</a></button>
      </div>
    </div>
  </div>
  `;

  container.innerHTML += content;
});

function findVeg(veg) {
  return veg.name === location;
}
function getSingleVeg() {
  console.log(vegetables.find(findVeg));
}
getSingleVeg();
