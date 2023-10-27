/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";

/// pagriebiame mygtuka ir pridedam jam funkcionaluma
document.querySelector("#btn").addEventListener("click", () => {
  /// panaikiname #message elementa
  document.querySelector("#message").remove();
  /// fetchiname duomenis is api
  fetch("https://api.github.com/users")
    .then((res) => res.json())
    .then((users) => {
      /// iteruojam per duomenu masyva
      users.forEach((user) => {
        /// kuriame userio kortele
        const userCard = document.createElement("div");
        userCard.classList.add('userCard');

        const userLogin = document.createElement("h2");
        const userLoginTxt = document.createTextNode(user.login);
        userLogin.appendChild(userLoginTxt);

        const userImg = document.createElement("img");
        userImg.setAttribute("src", user.avatar_url);
        userImg.setAttribute("alt", user.login);

        userCard.append(userLogin, userImg);
        /// atvaizduojame userio kortele ekrane
        document.querySelector("#output").appendChild(userCard);
      });
    });
});
