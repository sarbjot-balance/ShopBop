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
var sum = 0;
var data = JSON.parse(localStorage.getItem("arrShop")) || [];
console.log(data);
appendprod(data);
let totalItems = document.querySelector("#totalItemsCart");
totalItems.innerText = data.length;

function appendprod(data) {
  document.querySelector("#myprod").innerHTML = "";
  data.map(function (el, i, data) {
    let div = document.createElement("div");

    sum = sum + Number(el.retail_price);
    console.log(sum);
    let img = document.createElement("img");
    img.src = el.imagesrc;

    let btn = document.createElement("button");
    btn.classList.add("btns");
    btn.innerText = "Remove";
    btn.addEventListener("click", () => {
      remover(el, data, i);
    });

    var p1 = document.createElement("p");
    p1.innerHTML = el.title;

    var p2 = document.createElement("p");
    p2.classList.add("prices");
    p2.innerText = el.retail_price;
    console.log(p2);

    div.append(p1, img, btn, p2);
    document.querySelector("#myprod").append(div);
    // document.querySelector("#pp").append(p2);
    document.querySelector("#total").innerText = data.length;
  });
}

function remover(el, data, i) {
  data.splice(i, 1);
  localStorage.setItem("arrShop", JSON.stringify(data));
  appendprod(data);
  let totalItems = document.querySelector("#totalItemsCart");
  document.querySelector("#total").innerText = data.length;
  totalItems.innerText = data.length;
}
// document.querySelector("#subtotal").innerText = "₹ " + sum;

// var gst = (sum * 18) / 100;

// document.querySelector("#gst").innerHTML = "₹ " + Math.ceil(gst);

document.querySelector("#order").addEventListener("click", order);

document.querySelector("#otp").addEventListener("click", otpsned);

function otpsned() {
  var cn = document.querySelector("#card_number").value;
  var cvv = document.querySelector("#cvv").value;
  console.log(cn, cvv);
  if (cn.length == 16 && cvv.length == 3) {
    // swal({
    //   title: "OTP has been sent",
    //   text: "You OTP is 1234",
    //   icon: "success",
    //   button: "Got it!",
    // });
    alert("Your OTP is 1234💥");
  } else {
    // swal({
    //   title: "Oops Sorry,Please try agin!",
    //   text: "Your information is incorrect  ",
    //   icon: "error",
    //   button: "Got It",
    // });
    alert("Card Number must be of 16 digit and cvv of 3💥");
  }
}
function order() {
  event.preventDefault();
  console.log("");
  var otp = document.querySelector("#inotp").value;
  if (otp == "1234") {
    // console.log("hi")
    // swal({
    //   title: "Your order is place!",
    //   text: "Thank you for shopping with us!",
    //   icon: "success",
    // });
    alert("Thank you for shopping with us!🎉");

    window.location.href = "index.html";
  } else {
    // swal({
    //   text: "Your order is not place!",
    //   title: "Your payment failed!",
    //   icon: "error",
    //   button: "Oops!",
    // });
    alert("Incorrect OTP💥");
  }
}
