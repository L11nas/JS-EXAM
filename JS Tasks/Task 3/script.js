/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizduojama <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */
const ENDPOINT = 'https://api.github.com/users';

//GET Method

const getData = async () => {
  try {
    const response = await fetch(ENDPOINT);
    const data = await response.json();
    renderData(data);
  } catch (err) {
    console.error(err);
  }
};
getData();

//Display data about users

const renderData = (array) => {
  const output = document.getElementById('output');

  if (!output && !array) {
    return console.log('output not exist');
  }
  // Selecting and creating elements

  document.getElementById('btn').addEventListener('click', () => {
    array.forEach((user) => {
      const loginEl = document.createElement('h2');
      loginEl.textContent = user.login;

      const avatar_UrlEl = document.createElement('img');
      avatar_UrlEl.src = user.avatar_url;
      avatar_UrlEl.alt = `${user.login} photo`;

      // Appending

      const cardEl = document.createElement('div');
      cardEl.classList = 'card';
      cardEl.append(avatar_UrlEl, loginEl);
      const userOutputEl = document.getElementById('output');
      userOutputEl.append(cardEl);
      const removeEl = document.getElementById('message');
      removeEl.classList.remove('message'); //problem with this..
    });
  });
};
