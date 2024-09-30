import { Empleado } from "./Persona";
import { EstadoCivil } from "./Persona";

export class Empresa {
    empleados: Empleado[];

    constructor(empleados: Empleado[] = []) {
        this.empleados = empleados;
    }

    public agregarEmpleado(empleado: Empleado) {
        this.empleados.push(empleado);
        return empleado;
    }

    public eliminarEmpleado(empleado: Empleado): Empleado | undefined {
        for(let i = 0; i < this.empleados.length; i++) {
            if(this.empleados[i] === empleado) {
                this.empleados.splice(i, 1)
                return empleado;
            }
        }
    }

    public obtenerEmpleados(): Empleado[] {
        return this.empleados;
    }

    public calcularSalario(): number {
        return this.empleados.reduce((total, empleado) => total + empleado.salario, 0);
    }

}



