const vegetables = [
  {
    name: "Pumpkin",
    pic:
      "https://snaped.fns.usda.gov/sites/default/files/styles/crop_ratio_7_5/public/seasonal-produce/2018-05/pumpkin.jpg?itok=IXGgRg1X",
    description: "Lorem Lorem Lorem Lorem Lorem"
  },
  {
    name: "Tomato",
    pic:
      "https://c-7npsfqifvt25x24jnhx2ex78fcnex2edpn.g01.webmd.com/g00/3_c-7x78x78x78.x78fcne.dpn_/c-7NPSFQIFVT25x24iuuqtx3ax2fx2fjnh.x78fcne.dpnx2feundntx2fmjwfx2fx78fcnex2fdpotvnfs_bttfutx2ftjuf_jnbhftx2fbsujdmftx2fifbmui_uppmtx2fupnbup_ifbmui_cfofgjut_tmjeftipx78x2f504tt_uijoltupdl_sg_upnbupft_sjqfojoh_po_uif_wjof.kqhx3fj21d.nbslx3djnbhf_$/$/$/$/$/$/$/$/$/$",
    description: "Lorem Lorem Lorem Lorem Lorem"
  },
  {
    name: "Broccoli",
    pic:
      "https://veganworld.de/wp-content/uploads/appetite-1238250_960_720.jpg",
    description: "Lorem Lorem Lorem Lorem Lorem"
  }
];

const container = document.querySelector(".container");

// creates a card, expects to receive an object, internallz referred to as "vegetable"
function createCard(vegetable) {
  const content = `
  <div class="card-element">
    <div class="card-element__headline">
      <h2>${vegetable.name}</h2>
    </div>
    <div class="card-element__main">
      <div class="card-element__img">
        <img
          src="${vegetable.pic}"
          alt="${vegetable.name}"
        />
      </div>

      <div class="card-element__content">
        <p>
          ${vegetable.description}
        </p>
        <button><a href="/details.html">details</a></button>
      </div>
    </div>
  </div>
  `;
  // search for append on MDN for an alternative
  container.innerHTML += content;
}

// calls createCard and passes an object for each entry (or object) in the array
vegetables.forEach(vegetable => createCard(vegetable));

// let x = 1;
const testConst = vegetables[1];
vegetables[0](function(detail) {
  const detailContent = `

  <div class="details-container">
        <div class="details-container__img">
          <img
            src="${testcont.pic}"
            alt="${detail.name}"
          />
        </div>
        <div class="details-container__description">
          ${detail.description}
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
  console.log(detailContent);
});
