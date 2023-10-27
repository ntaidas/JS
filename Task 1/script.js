/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio konvertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
 document
    .querySelector('.wrapper > form')
    .addEventListener('submit', e => {
        e.preventDefault();
        /// paimame user input
        const kg = e.target.elements.search.valueAsNumber;

        /// konvertuojame svori
        const lb = kg * 2.2046;
        const g = kg / 0.0010000;
        const oz = kg * 35.274;

        /// sukuriame elementus
        const lbEl = document.createElement('p');
        const lbTxt = document.createTextNode(`${lb} lb`);
        lbEl.appendChild(lbTxt);
        
        const gEl = document.createElement('p');
        const gTxt = document.createTextNode(`${g} g`);
        gEl.appendChild(gTxt);

        const ozEl = document.createElement('p');
        const ozTxt = document.createTextNode(`${oz} oz`);
        ozEl.appendChild(ozTxt);

        /// atvaizduojam konvertuota svori pusplapyje
        document.querySelector('#output').append(lbEl,gEl,ozEl)
    })