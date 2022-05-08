import navbar from "../components/navbar.js";
import {
  addingProductRoute,
  addingSigUpRoute,
  addingCartRoute,
  homies,
} from "./navbars.js";
import footer from "../components/footer.js";
import slidecomp from "../components/slidingComponent.js";
import slider from "./slide.js";

//adding navbar
let nav = document.querySelector("#nav");

nav.innerHTML = navbar();
addingSigUpRoute();
addingProductRoute();
addingCartRoute();
homies();
//sliding component
let comp1 = document.querySelector("#comp1");
let comp2 = document.querySelector("#comp2");
let comp3 = document.querySelector("#comp3");

comp1.innerHTML = slidecomp(
  1,
  "./img/img-1.png",
  "./img/img-2.png",
  "./img/img-3.png"
);
comp2.innerHTML = slidecomp(
  2,
  "./img/img-4.png",
  "./img/img-5.png",
  "./img/img-6.png"
);
comp3.innerHTML = slidecomp(
  3,
  "./img/img-7.png",
  "./img/img-8.png",
  "./img/img-9.png"
);
slider(1);
slider(2);
slider(3);
//footer
document.getElementById("footer").innerHTML = footer();

let data = JSON.parse(localStorage.getItem("arrShop")) || [];
let totalItems = document.querySelector("#totalItemsCart");
totalItems.innerText = data.length;
