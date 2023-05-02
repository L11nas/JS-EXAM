/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, kuris vartotojui atėjus į tinklapį kreipsis į cars.json failą ir 
atvaizduos visus automobilių gamintojus bei pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.

Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';

// Get data
const carsBrand = async () => {
  try {
    const response = await fetch('./cars.json');
    const data = await response.json();
    renderCarBrand(data);
  } catch (err) {
    console.log(err);
  }
};
carsBrand();

const renderCarBrand = (carBrand) => {
  const output = document.getElementById('output');
  if (!output && !carBrand) {
    return console.log('output no exist');
  }
  carBrand.forEach((carBrand) => {
    for (i = 0; i <= carBrand.models.length; i++) {
      //create elements

      const cardEl = document.createElement('div');
      const hEl = document.createElement('h2');
      const ulEl = document.createElement('ul');
      const liEl = document.createElement('li');

      hEl.textContent = carBrand.brand;
      liEl.textContent = carBrand.models[i];

      //Appending

      cardEl.append(hEl, ulEl, liEl);
      output.append(cardEl);
    }
  });
};
