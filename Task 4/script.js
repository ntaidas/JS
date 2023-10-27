/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš jo atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';

fetch(ENDPOINT)
    .then(res => res.json())
    .then(data => {
        data.forEach(make => {

            const makeCard = document.createElement('div');
            makeCard.classList.add('brand');

            const header = document.createElement('h1');
            const headerTxt  = document.createTextNode(make.brand);
            header.appendChild(headerTxt);

            const modelContainer = document.createElement('ul');

            makeCard.append(header, modelContainer);

            make.models.forEach(model => {
                const modelEl = document.createElement('li');
                const modelTxt = document.createTextNode(model);
                modelEl.appendChild(modelTxt);
                modelContainer.appendChild(modelEl);
            })

            document.querySelector('#output').appendChild(makeCard);
        })
    })