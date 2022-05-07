let arr = JSON.parse(localStorage.getItem("arr")) || [];

let createAccount = (e) => {
  e.preventDefault();
  console.log("hello");
  let form_data = {
    name: document.getElementById("username").value,
    email: document.getElementById("email").value,
    password: document.getElementById("pswd").value,
    repassword: document.getElementById("rpswd").value,
  };

  console.log(form_data, arr);
  arr.push(form_data);
  localStorage.setItem("arr", JSON.stringify(arr));

  alert("account created");
  window.location.href = "login.html";
};

let form = document.querySelector("form");
form.addEventListener("submit", createAccount);
