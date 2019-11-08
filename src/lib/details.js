import { vegetables } from "./array";

function findVeg(veg) {
  return veg.location === location.search;
}
function getSingleVeg() {
  console.log(vegetables.find(findVeg));
}
getSingleVeg();
