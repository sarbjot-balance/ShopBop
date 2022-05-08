import navbar from "../components/navbar.js";
import {
  addingProductRoute,
  addingSigUpRoute,
  addingCartRoute,
  homies,
} from "./navbars.js";

let nav = document.querySelector("#nav");

nav.innerHTML = navbar();
addingSigUpRoute();
addingProductRoute();
addingCartRoute();
homies();
const url = `http://localhost:4000/mens`;

const container = document.getElementById("men_items");

fetch(url)
  .then(function (res) {
    return res.json();
  })
  .then(function (res) {
    appendData(res);
    console.log(res);
  })
  .catch(function (err) {
    console.log("err:", err);
  });

var data = JSON.parse(localStorage.getItem("arrShop")) || [];

function appendData(data) {
  data.forEach(function (el) {
    let div = document.createElement("div");

    let brand = document.createElement("h4");
    brand.innerText = el.brand;

    let image = document.createElement("img");
    image.src = el.imagesrc;

    let title = document.createElement("p");
    title.innerText = el.title;

    let price = document.createElement("h5");
    price.innerText = el.retail_price;

    let btn = document.createElement("button");
    btn.innerText = " Add to Cart";
    btn.setAttribute("id", "add_to_cart");

    btn.addEventListener("click", function () {
      addToCart(el);
      // console.log("btn clicked")
    });

    div.append(image, brand, title, price, btn);

    document.querySelector("#men_items").append(div);
  });
}

function addToCart(el) {
  data.push(el);
  // window.location.reload()
  alert("Item Added to Cart💥");
  let totalItems = document.querySelector("#totalItemsCart");
  totalItems.innerText = data.length;
  localStorage.setItem("arrShop", JSON.stringify(data));
}
let totalItems = document.querySelector("#totalItemsCart");
totalItems.innerText = data.length;
