/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: rezultatas turi būti matomas pateikus formą ir atvaizduojamas
<div id="output"></div> viduje. Gautus atsakymus stilizuokite naudojant CSS;
------------------------------------------------------------------- */
document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault();

  const kg = document.getElementById('search').value;
  const lb = kg * 2.2046;
  const g = kg / 0.001;
  const oz = kg * 35.274;

  document.getElementById('output').innerHTML =
    lb + 'lb<br>' + g + 'g<br>' + oz + 'oz<br>';
});
