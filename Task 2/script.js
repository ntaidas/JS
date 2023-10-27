/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */

///pajungiame mygtuka
document.querySelector("#btn__element").addEventListener("click", () => {
  let btnCount = parseInt(
    document.querySelector("#btn__state").childNodes[0].nodeValue
  );
  btnCount++;
  document.querySelector("#btn__state").childNodes[0].nodeValue = btnCount;
});
