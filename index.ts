import { Persona, Vehiculo } from "./Persona";
import { Empleado } from "./Persona";
import { Coche, Moto } from "./Persona";
import { EstadoCivil } from "./Persona"
import { Empresa } from "./Empresa"
import { Proyecto } from "./proyecto";

const persona1 = new Persona("Laura", 18, {
    calle: "5048",
    ciudad: "Cali",
    pais: "Colombia"},
    [],
    EstadoCivil.SOLTERO
);

persona1.agregarVehiculo(new Coche("Chevrolet", "2002"));
persona1.agregarVehiculo(new Coche("Honda", "2019"));
persona1.mostrarVehiculos();

const persona2 = new Persona("Andrea", 20, {
    calle: "1000",
    ciudad: "Medellín",
    pais: "Colombia"},
    [],
    EstadoCivil.CASADO
);

const persona3 = new Persona("Sara", 30, {
    calle: "200",
    ciudad: "Buenos Aires",
    pais: "Argentina"},
    [],
    EstadoCivil.SOLTERO
);

const persona4 = new Persona("Andres", 21, {
    calle: "305",
    ciudad: "Quito",
    pais: "Ecuador"},
    [],
    EstadoCivil.SOLTERO
);

const persona5 = new Persona("Alba", 5, {
    calle: "450",
    ciudad: "Madrid",
    pais: "España"},
    [],
    EstadoCivil.SOLTERO
);

const persona6 = new Persona("Sonia", 7, {
    calle: "204",
    ciudad: "Bogotá",
    pais: "Colombia"},
    [],
    EstadoCivil.SOLTERO
);

const persona7 = new Persona("Lina", 2, {
    calle: "78",
    ciudad: "Ciudad de México",
    pais: "México"},
    [],
    EstadoCivil.SOLTERO
);

const persona8 = new Persona("Cristina", 30, {
    calle: "912",
    ciudad: "Santiago",
    pais: "Chile"},
    [],
    EstadoCivil.SOLTERO
);

const persona9 = new Persona("Estefania", 19, {
    calle: "33",
    ciudad: "Lima",
    pais: "Perú"},
    [],
    EstadoCivil.SOLTERO
);

const persona10 = new Persona("Aurora", 67, {
    calle: "1220",
    ciudad: "Montevideo",
    pais: "Uruguay"},
    [],
    EstadoCivil.SOLTERO
);


const personas = [persona1, persona2, persona3, persona4, persona5, persona6, persona7, persona8, persona9, persona10];

for (let i = 0; i < personas.length; i++) {
    console.log(personas[i].imprimirCiudad())
    
}

console.log("Su edad es: ", persona1.getEdad());

const empleado1 = new Empleado("Juan", 40, 500000, {
    calle: "548",
    ciudad: "Medellin",
    pais: "Colombia"},
    [],
    EstadoCivil.DIVORCIADO
);

empleado1.agregarVehiculo (new Coche("Chevrolet", "Spark"))
empleado1.agregarVehiculo(new Coche("Honda", "2016"))
empleado1.mostrarVehiculos();

const empleado2 = new Empleado("Anderson", 19, 50000, {
    calle: "100",
    ciudad: "Medellín",
    pais: "Colombia"
}, [], EstadoCivil.SOLTERO);

const empleado3 = new Empleado("Camila", 29, 10000, {
    calle: "299",
    ciudad: "Medellín",
    pais: "Colombia"
}, [], EstadoCivil.DIVORCIADO);

const empleado4 = new Empleado("Sara", 20, 15000, {
    calle: "204",
    ciudad: "San José",
    pais: "Costa Rica"
}, [], EstadoCivil.SOLTERO);

const empleado5 = new Empleado("Estefanía", 30, 20000, {
    calle: "1001",
    ciudad: "Asunción",
    pais: "Paraguay"
}, [], EstadoCivil.CASADO);

const empleado6 = new Empleado("Andrea", 15, 100, {
    calle: "102",
    ciudad: "Caracas",
    pais: "Venezuela"
}, [], EstadoCivil.SOLTERO);

const empleado7 = new Empleado("Manuela", 60, 5000, {
    calle: "450",
    ciudad: "La Paz",
    pais: "Bolivia"
}, [], EstadoCivil.DIVORCIADO);

const empleado8 = new Empleado("Constanza", 70, 40000, {
    calle: "1234",
    ciudad: "Brasilia",
    pais: "Brasil"},
    [], 
    EstadoCivil.CASADO);

const empleado9 = new Empleado("Wendy", 27, 18000, {
    calle: "567",
    ciudad: "Panamá",
    pais: "Panamá"
}, [], EstadoCivil.SOLTERO);

const empleado10 = new Empleado("Sonia", 40, 2000, {
    calle: "890",
    ciudad: "Guatemala",
    pais: "Guatemala"
}, [], EstadoCivil.DIVORCIADO);


export const empleados = [empleado1, empleado2, empleado3, empleado4, empleado5, empleado6, empleado7, empleado8, empleado9, empleado10];

for(let i = 0; i < empleados.length; i++) {
    console.log(empleados[i].imprimirCiudad());
};


const coche1 = new Coche("Toyota", "corolla");
console.log(coche1.informacion());
console.log(coche1.arrancar());


const moto1 = new Moto("klx", "250");
console.log(moto1.informacion());
console.log(moto1.arrancar());


const empleado11 = new Empleado("Laura", 25, 700, { calle: "123", ciudad: "Bogotá", pais: "Colombia" }, [], EstadoCivil.SOLTERO);
const empleado12 = new Empleado("Sara", 25, 700, { calle: "456", ciudad: "Bogotá", pais: "Colombia" }, [], EstadoCivil.SOLTERO);
const empleado13 = new Empleado("Juan", 30, 800, { calle: "789", ciudad: "Cali", pais: "Colombia" }, [], EstadoCivil.CASADO);
const empleado14 = new Empleado("Pedro", 28, 600, { calle: "321", ciudad: "Medellín", pais: "Colombia" }, [], EstadoCivil.SOLTERO);
const empleado15 = new Empleado("Ana", 27, 900, { calle: "654", ciudad: "Cartagena", pais: "Colombia" }, [], EstadoCivil.CASADO);
const empleado16 = new Empleado("Luis", 35, 750, { calle: "987", ciudad: "Barranquilla", pais: "Colombia" }, [], EstadoCivil.SOLTERO);

const miEmpresa = new Empresa();

miEmpresa.agregarEmpleado(empleado11);
miEmpresa.agregarEmpleado(empleado12);
miEmpresa.agregarEmpleado(empleado13);
miEmpresa.agregarEmpleado(empleado14);
miEmpresa.agregarEmpleado(empleado15);
miEmpresa.agregarEmpleado(empleado16);

console.log(miEmpresa.obtenerEmpleados());

const empleadoEliminado = (miEmpresa.eliminarEmpleado(empleado16));
console.log("Empleado eliminado:", empleadoEliminado)

const totalSalarios = miEmpresa.calcularSalario();
console.log("Total de los salario es: ", totalSalarios)

const proyecto1 = new Proyecto("Aplicación para celulares")
const proyecto2 = new Proyecto("Videojuego")

proyecto1.asignarEmpleado(empleado1);
proyecto1.asignarEmpleado(empleado2);

proyecto2.asignarEmpleado(empleado2);

console.log("Empleados asignados al proyecto 1: ", proyecto1.empleadosAsignados)