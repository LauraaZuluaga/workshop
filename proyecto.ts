import { Empleado } from "./Persona";

export class Proyecto {
    nombreProyecto: string;
    empleadosAsignados: Empleado[];

    constructor(nombreProyecto: string) {
        this.nombreProyecto = nombreProyecto;
        this.empleadosAsignados = [];
    }

    public asignarEmpleado(empleado: Empleado): void {
        this.empleadosAsignados.push(empleado);
        empleado.asignarProyecto(this); 
    }

    public obtenerEmpleadosAsignados(): Empleado[] {
        return this.empleadosAsignados;
    }
}