/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */
class Movie {
  constructor(title, director, budget) {
    this.title = title;
    this.director = director;
    this.budget = budget;
  }

  wasExpensive() {
    return this.budget > 1e8 ? true : false;
  }
}

const movieOne = new Movie('Star Wars: The Force Awakens', 'J.J.Abrams', 259e6);
const movieTwo = new Movie('Tangled', 'NathanGren', 260e6);
const movieThree = new Movie('The Net', 'IrwinWinkler', 1e6);

console.log(movieOne.wasExpensive());
console.log(movieTwo.wasExpensive());
console.log(movieThree.wasExpensive());
