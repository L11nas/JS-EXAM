/* ------------------------------ TASK 6 -----------------------------------
Turimas "users" masyvas. 

Parašykite funckijas, kurios atliks nurodytas užduotis:
1. funkcija "getUserAverageAge" - kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins visų "users" amžiaus vidurkį kaip skaičių.
2. funkcija "getUsersNames" -  kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins visų "users" vardus naujame masyve pvz., ['John Smith', 'Ann Smith'..].
-------------------------------------------------------------------------- */

const users = [
  { id: '1', name: 'John Smith', age: 20 },
  { id: '2', name: 'Ann Smith', age: 24 },
  { id: '3', name: 'Tom Jones', age: 31 },
  { id: '4', name: 'Rose Peterson', age: 17 },
  { id: '5', name: 'Alex John', age: 25 },
  { id: '6', name: 'Ronald Jones', age: 63 },
  { id: '7', name: 'Elton Smith', age: 16 },
  { id: '8', name: 'Simon Peterson', age: 30 },
  { id: '9', name: 'Daniel Cane', age: 51 },
];

//1.
const getUserAverageAge = users.reduce(
  function (acc, curr, index, array) {
    acc.names.push(curr.name);
    acc.ages.push(curr.age);

    acc.agesSum += curr.age;

    if (!acc.avgAge) {
      const totalSum = array.reduce(function (acc, curr) {
        return acc + curr.age;
      }, 0);
      acc.avgAge = totalSum / array.length;
    }
    return acc;
  },
  {
    names: [],
    ages: [],
    agesSum: 0,
  }
);
console.log(getUserAverageAge);

//2.

const getUsersNames = users.map((user) => user.name);
console.log(getUsersNames);
