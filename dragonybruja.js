"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bruja = exports.Dragon = exports.PersonajeBase = void 0;
// dragonybruja.ts
var PersonajeBase = /** @class */ (function () {
    function PersonajeBase(nombre, salud, poder) {
        this.nombre = nombre;
        this.salud = salud;
        this.poder = poder;
    }
    PersonajeBase.prototype.atacar = function () {
        console.log("".concat(this.nombre, " ataca con ").concat(this.poder, " de poder!"));
    };
    PersonajeBase.prototype.evolucionar = function () {
        console.log("".concat(this.nombre, " no puede evolucionar."));
    };
    return PersonajeBase;
}());
exports.PersonajeBase = PersonajeBase;
var Dragon = /** @class */ (function (_super) {
    __extends(Dragon, _super);
    function Dragon(nombre, salud, poder, fuego) {
        var _this = _super.call(this, nombre, salud, poder) || this;
        _this.fuego = fuego;
        return _this;
    }
    Dragon.prototype.atacar = function () {
        console.log("".concat(this.nombre, " lanza fuego con ").concat(this.poder + this.fuego, " de poder!"));
    };
    Dragon.prototype.evolucionar = function () {
        console.log("".concat(this.nombre, " evoluciona a Drag\u00F3n Anciano!"));
        this.poder += 10; // Aumenta el poder al evolucionar
    };
    return Dragon;
}(PersonajeBase));
exports.Dragon = Dragon;
var Bruja = /** @class */ (function (_super) {
    __extends(Bruja, _super);
    function Bruja(nombre, salud, poder, hechizo) {
        var _this = _super.call(this, nombre, salud, poder) || this;
        _this.hechizo = hechizo;
        return _this;
    }
    Bruja.prototype.atacar = function () {
        console.log("".concat(this.nombre, " lanza el hechizo '").concat(this.hechizo, "' con ").concat(this.poder, " de poder!"));
    };
    Bruja.prototype.evolucionar = function () {
        console.log("".concat(this.nombre, " evoluciona a Gran Bruja!"));
        this.poder += 5; // Aumenta el poder al evolucionar
    };
    return Bruja;
}(PersonajeBase));
exports.Bruja = Bruja;
