let regUser = JSON.parse(localStorage.getItem("arr")) || [];

console.log(regUser);

document.querySelector("form").addEventListener("submit", loginFun);

function loginFun() {
  event.preventDefault();

  var enteredemail = document.querySelector("#loginemail").value;
  var enteredpass = document.querySelector("#password").value;

  console.log(enteredemail, enteredpass);

  for (var i = 0; i < regUser.length; i++) {
    //   console.log(regUser[i])

    if (
      regUser[i].email === enteredemail &&
      regUser[i].password === enteredpass
    ) {
      alert("Login Successful💥");
      window.location.href = "index.html";

      return;
    }
  }
  return alert("Login UnSuccessful💥");
}
