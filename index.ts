import { Persona } from "./Persona";
import { Empleado } from "./Persona"

const persona1 = new Persona("Laura", 18);
const persona2 = new Persona("Andrea", 20);
const persona3 = new Persona("Sara", 30);
const persona4 = new Persona("Andres", 21);
const persona5 = new Persona("Alba", 55);
const persona6 = new Persona("Sonia", 47);
const persona7 = new Persona("Lina", 25);
const persona8 = new Persona("Cristina", 13);
const persona9 = new Persona("Estefania", 40);
const persona10 = new Persona("Aurora", 67);

console.log(persona1.saludar());
console.log(persona2.saludar());
console.log(persona3.saludar());
console.log(persona4.saludar());
console.log(persona5.saludar());
console.log(persona6.saludar());
console.log(persona7.saludar());
console.log(persona8.saludar());
console.log(persona9.saludar());
console.log(persona10.saludar());

console.log("Su edad es: ", persona1.getEdad());

const empleado1 = new Empleado("Juan", 40, 500000);
console.log(empleado1.trabajar(8));

const empleado2 = new Empleado ("Anderson", 19, 50000);
const empleado3 = new Empleado ("Camila", 29, 10000);
const empleado4 = new Empleado ("Sara", 20, 15000);
const empleado5 = new Empleado ("Estefania", 30, 20000);
const empleado6 = new Empleado ("Andrea", 15, 100);
const empleado7 = new Empleado ("Manuela", 60, 5000);
const empleado8 = new Empleado ("Constanza", 70, 40000);
const empleado9 = new Empleado ("Wendy", 27, 18000);
const empleado10 = new Empleado ("Sonia", 40, 2000);

console.log(empleado1.saludar());
console.log(empleado2.saludar());
console.log(empleado3.saludar());
console.log(empleado4.saludar());
console.log(empleado5.saludar());
console.log(empleado6.saludar());
console.log(empleado7.saludar());
console.log(empleado8.saludar());
console.log(empleado9.saludar());
console.log(empleado10.saludar());