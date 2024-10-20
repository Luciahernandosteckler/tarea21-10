"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// main.ts
const dragonybruja_1 = require("./dragonybruja");
const dragón = new dragonybruja_1.Dragon("Fuego", 100, 20, 30); //  los parámetros representan las características de los personajes : Nombre -Salud inicial -Poder Base -Daño adicional
const bruja = new dragonybruja_1.Bruja("Morgana", 80, 15, "Rayo");
// Atacar
dragón.atacar();
bruja.atacar();
// Evolucionar
dragón.evolucionar();
bruja.evolucionar();
// Ver el poder después de evolucionar
dragón.atacar();
bruja.atacar();
