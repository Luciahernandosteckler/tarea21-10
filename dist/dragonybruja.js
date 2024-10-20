"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bruja = exports.Dragon = exports.PersonajeBase = void 0;
class PersonajeBase {
    constructor(nombre, salud, poder) {
        this.nombre = nombre;
        this.salud = salud;
        this.poder = poder;
    }
    atacar() {
        console.log(`${this.nombre} ataca con ${this.poder} de poder!`);
    }
    evolucionar() {
        console.log(`${this.nombre} no puede evolucionar.`);
    }
}
exports.PersonajeBase = PersonajeBase;
class Dragon extends PersonajeBase {
    constructor(nombre, salud, poder, fuego) {
        super(nombre, salud, poder);
        this.fuego = fuego;
    }
    atacar() {
        const poderTotal = this.poder + this.fuego;
        super.atacar(); // Llama al método atacar de la clase base
        console.log(`${this.nombre} lanza fuego con ${poderTotal} de poder!`);
    }
    evolucionar() {
        super.evolucionar(); // Llama al método evolucionar de la clase base
        console.log(`${this.nombre} evoluciona a Dragón Anciano!`);
        this.poder += 10; // Aumenta el poder al evolucionar
    }
}
exports.Dragon = Dragon;
class Bruja extends PersonajeBase {
    constructor(nombre, salud, poder, hechizo) {
        super(nombre, salud, poder);
        this.hechizo = hechizo;
    }
    atacar() {
        super.atacar(); // Llama al método atacar de la clase base
        console.log(`${this.nombre} lanza el hechizo '${this.hechizo}' con ${this.poder} de poder!`);
    }
    evolucionar() {
        super.evolucionar(); // Llama al método evolucionar de la clase base
        console.log(`${this.nombre} evoluciona a Gran Bruja!`);
        this.poder += 5; // Aumenta el poder al evolucionar
    }
}
exports.Bruja = Bruja;
//Clase Dragon: - Hereda de PersonajeBase. - Tiene un constructor que recibe nombre, salud, poder, y fuego. 
//- El método atacar muestra el poder al lanzar fuego, que es la suma del poder del personaje y el atributo fuego. 
//- El método evolucionar aumenta el poder del dragón en 10. 2.
