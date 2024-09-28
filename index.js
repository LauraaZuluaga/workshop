"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Persona_1 = require("./Persona");
var Persona_2 = require("./Persona");
var persona1 = new Persona_1.Persona("Laura", 18, {
    calle: "5048",
    ciudad: "Cali",
    pais: "Colombia",
});
var persona2 = new Persona_1.Persona("Andrea", 20, {
    calle: "1000",
    ciudad: "Medellin",
    pais: "Colombia",
});
var persona3 = new Persona_1.Persona("Sara", 30, {
    calle: "200",
    ciudad: "Buenos Aires",
    pais: "Argentina",
});
var persona4 = new Persona_1.Persona("Andres", 21, {
    calle: "305",
    ciudad: "Quito",
    pais: "Ecuador",
});
var persona5 = new Persona_1.Persona("Alba", 5, {
    calle: "450",
    ciudad: "Madrid",
    pais: "España",
});
var persona6 = new Persona_1.Persona("Sonia", 7, {
    calle: "204",
    ciudad: "Bogotá",
    pais: "Colombia",
});
var persona7 = new Persona_1.Persona("Lina", 2, {
    calle: "78",
    ciudad: "Ciudad de México",
    pais: "México",
});
var persona8 = new Persona_1.Persona("Cristina", 30, {
    calle: "912",
    ciudad: "Santiago",
    pais: "Chile",
});
var persona9 = new Persona_1.Persona("Estefania", 19, {
    calle: "33",
    ciudad: "Lima",
    pais: "Perú",
});
var persona10 = new Persona_1.Persona("Aurora", 67, {
    calle: "1220",
    ciudad: "Montevideo",
    pais: "Uruguay",
});
var personas = [persona1, persona2, persona3, persona4, persona5, persona6, persona7, persona8, persona9, persona10];
for (var i = 0; i < personas.length; i++) {
    console.log(personas[i].imprimirCiudad());
}
console.log("Su edad es: ", persona1.getEdad());
var empleado1 = new Persona_2.Empleado("Juan", 40, 500000, {
    calle: "548",
    ciudad: "Medellin",
    pais: "Colombia",
});
var empleado2 = new Persona_2.Empleado("Anderson", 19, 50000, {
    calle: "100",
    ciudad: "Medellin",
    pais: "Colombia",
});
var empleado3 = new Persona_2.Empleado("Camila", 29, 10000, {
    calle: "299",
    ciudad: "Medellin",
    pais: "Colombia",
});
var empleado4 = new Persona_2.Empleado("Sara", 20, 15000, {
    calle: "204",
    ciudad: "San José",
    pais: "Costa Rica",
});
var empleado5 = new Persona_2.Empleado("Estefania", 30, 20000, {
    calle: "1001",
    ciudad: "Asunción",
    pais: "Paraguay",
});
var empleado6 = new Persona_2.Empleado("Andrea", 15, 100, {
    calle: "102",
    ciudad: "Caracas",
    pais: "Venezuela",
});
var empleado7 = new Persona_2.Empleado("Manuela", 60, 5000, {
    calle: "450",
    ciudad: "La Paz",
    pais: "Bolivia",
});
var empleado8 = new Persona_2.Empleado("Constanza", 70, 40000, {
    calle: "1234",
    ciudad: "Brasilia",
    pais: "Brasil",
});
var empleado9 = new Persona_2.Empleado("Wendy", 27, 18000, {
    calle: "567",
    ciudad: "Panamá",
    pais: "Panamá",
});
var empleado10 = new Persona_2.Empleado("Sonia", 40, 2000, {
    calle: "890",
    ciudad: "Guatemala",
    pais: "Guatemala",
});
var empleados = [empleado1, empleado2, empleado3, empleado4, empleado5, empleado6, empleado7, empleado8, empleado9, empleado10];
for (var i = 0; i < empleados.length; i++) {
    console.log(empleados[i].imprimirCiudad());
}
;
var Persona_3 = require("./Persona");
var Persona_4 = require("./Persona");
var coche1 = new Persona_3.Coche("Toyota", "corolla");
console.log(coche1.informacion());
console.log(coche1.arrancar());
var moto1 = new Persona_4.Moto("klx", "250");
console.log(moto1.informacion());
console.log(moto1.arrancar());
