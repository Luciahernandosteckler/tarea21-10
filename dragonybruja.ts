import { IPersonaje } from './personaje';

export class PersonajeBase implements IPersonaje {
    constructor(
        public nombre: string,
        public salud: number,
        public poder: number
    ) { }

    atacar(): void {
        console.log(`${this.nombre} ataca con ${this.poder} de poder!`);
    }

    evolucionar(): void {
        console.log(`${this.nombre} no puede evolucionar.`);
    }
}

export class Dragon extends PersonajeBase {
    constructor(nombre: string, salud: number, poder: number, public fuego: number) {
        super(nombre, salud, poder);
    }

    atacar(): void {
        const poderTotal = this.poder + this.fuego;
        super.atacar();
        console.log(`${this.nombre} lanza fuego con ${poderTotal} de poder!`);
    }

    evolucionar(): void {
        super.evolucionar();
        console.log(`${this.nombre} evoluciona a Dragón Anciano!`);
        this.poder += 10;
    }
}

export class Bruja extends PersonajeBase {
    constructor(nombre: string, salud: number, poder: number, public hechizo: string) {
        super(nombre, salud, poder);
    }

    atacar(): void {
        super.atacar();
        console.log(`${this.nombre} lanza el hechizo '${this.hechizo}' con ${this.poder} de poder!`);
    }

    evolucionar(): void {
        super.evolucionar();
        console.log(`${this.nombre} evoluciona a Gran Bruja!`);
        this.poder += 5;
    }
}

//Clase Dragon: - Hereda de PersonajeBase. - Tiene un constructor que recibe nombre, salud, poder, y fuego.
//- El método atacar muestra el poder al lanzar fuego, que es la suma del poder del personaje y el atributo fuego.
//- El método evolucionar aumenta el poder del dragón en 10. 2.