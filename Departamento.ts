import { Empleado } from "./Persona";

export class Departamento {
    nombre: string;
    empleados: Empleado[];

    constructor(nombre: string) {
        this.nombre = nombre;
        this.empleados = [];
    }

    agregarEmpleado(empleado: Empleado): void {
        this.empleados.push(empleado);
        console.log(`Empleado ${empleado.nombre} añadido al departamento ${this.nombre}.`);
    }

    eliminarEmpleado(empleado: Empleado): void {
        const index = this.empleados.indexOf(empleado);
        if (index > -1) {
            this.empleados.splice(index, 1);
            console.log(`Empleado ${empleado.nombre} eliminado del departamento ${this.nombre}.`);
        } else {
            console.log(`Empleado ${empleado.nombre} no encontrado en el departamento ${this.nombre}.`);
        }
    }

    listarEmpleados(): void {
        console.log(`Empleados en el departamento ${this.nombre}:`);
        this.empleados.forEach((empleado, index) => {
            console.log(`${index + 1}. ${empleado.nombre}`);
        });
    }
}