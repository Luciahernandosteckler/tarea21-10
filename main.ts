// main.ts

import { Dragon, Bruja } from './dragonybruja';

const dragón = new Dragon("Fuego", 100, 20, 30);  //  los parámetros representan las características de los personajes : Nombre -Salud inicial -Poder Base -Daño adicional


const bruja = new Bruja("Morgana", 80, 15, "Rayo"); 

// Atacar
dragón.atacar();
bruja.atacar();

// Evolucionar
dragón.evolucionar();
bruja.evolucionar();

//Poder después de evolucionar
dragón.atacar();
bruja.atacar();
