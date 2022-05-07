function addingProductRoute() {
  let data = document.querySelectorAll(".new");
  console.log(data);
  for (let i = 0; i < data.length; i++) {
    //   let n = i.querySelectorAll("p");

    data[i].addEventListener("click", function (e) {
      // e.preventDefault();
      let id = e.target;
      console.log(id.localName == "p");
      if (id.localName == "p") {
        if (i === 1 || i === 5 || i === 9) {
          window.location.href = "./../men.html";
        } else if (i === 2 || i === 6) {
          window.location.href = "./../coat.html";
        } else if (i === 7 || i === 3 || i === 0) {
          window.location.href = "./../boot.html";
        } else if (i === 4 || i === 8) {
          window.location.href = "./../spring22.html";
        }
        // if (i % 2 == 0) {
        //   alert("🚹");
        // } else {
        //   alert("👩");
        // }
      }
    });
  }
}
function addingSigUpRoute() {
  let id = document.querySelector("#signChild");

  id.addEventListener("click", () => {
    window.location.href = "./../signup.html";
  });
}
function addingCartRoute() {
  let wish = document.querySelector("#wishlisteds");
  let cart = document.querySelector("#carteds");

  wish.addEventListener("click", () => {
    window.location.href = "./../checkout.html";
  });
  cart.addEventListener("click", () => {
    window.location.href = "./../checkout.html";
  });
}
function homies() {
  let logoes = document.querySelector("#logo");
  logoes.addEventListener("click", () => {
    window.location.href = "./../index.html";
  });
}
export { addingProductRoute, addingSigUpRoute, addingCartRoute, homies };
