// personaje.ts


export interface IPersonaje {
    nombre: string;
    salud: number;
    poder: number;
    atacar(): void;
    evolucionar(): void;
}
