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
        <button><a href="/details.html">details</a></button>
      </div>
    </div>
  </div>
  `;
  // const cardContent = document.createElement("div");
  // cardContent.innerHTML = content.toString();
  // return cardContent;
  return content;
});
console.log(content);
