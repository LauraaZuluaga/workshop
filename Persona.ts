import { Proyecto } from "./proyecto";

export enum EstadoCivil {
    SOLTERO,
    CASADO,
    DIVORCIADO
}

export class Persona {
    nombre: string;
    private edad: number;
    direccion: Direccion;
    vehiculos: Vehiculo[];
    estadoCivil: EstadoCivil;

    constructor(nombre: string, edad: number, direccion: Direccion, vehiculos: Vehiculo[] = [], estadoCivil: EstadoCivil) {
        this.nombre = nombre;
        this.edad = edad;
        this.direccion = direccion;
        this.vehiculos = vehiculos;
        this.estadoCivil = estadoCivil;
    }

    public saludar(): string {
        return `Persona: Su nombre es ${this.nombre} y tiene ${this.edad} años.`;
    }

    getEdad(): number {
        return this.edad;
    }

    imprimirCiudad(): string {
        return `La ciudad de residencia de ${this.nombre} es: ${this.direccion.ciudad}`
    }

    public agregarVehiculo(vehiculo: Vehiculo): void {
        this.vehiculos.push(vehiculo);
    }
    
    
    public mostrarVehiculos(): void {
        console.log(`${this.nombre} tiene los siguientes vehículos:`);
        this.vehiculos.forEach((vehiculo, index) => {
            console.log(`Vehículo ${index + 1}: ${vehiculo.informacion()}`);
            console.log(vehiculo.arrancar());
        });
    }
}

export class Empleado extends Persona {
    salario: number;
    proyectosAsignados: Proyecto[];

    constructor(nombre: string, edad: number, salario: number, direccion: Direccion, vehiculos: Vehiculo[] = [], estadoCivil: EstadoCivil) {
        super(nombre, edad, direccion, vehiculos, estadoCivil);
        this.salario = salario;
        this.estadoCivil = estadoCivil; 
        this.proyectosAsignados = [];
    }

    trabajar(horas: number): string {
        return `Cantidad de horas trabajadas en el dia: ${horas}.`
    }

    override saludar(): string {
        return `Empleado: Su nombre es ${this.nombre} y tiene ${this.getEdad()} años. Su salario es de ${this.salario} dolares.`;
    }

    public asignarProyecto(proyecto: Proyecto): void {
        this.proyectosAsignados.push(proyecto);
    }

    public obtenerProyectosAsignados(): Proyecto[] {
        return this.proyectosAsignados;
    }
}

interface Direccion {
    calle?: string;
    ciudad: string;
    pais?: string;
}

export abstract class Vehiculo {
    constructor(public marca: string, public modelo: string) {}

    abstract arrancar(): String;

    public informacion(): string {
        return `Marca: ${this.marca}, Modelo: ${this.modelo}`;
    }
}

export class Coche extends Vehiculo {
    constructor(marca: string, modelo: string) {
        super(marca, modelo);
    }

    public arrancar(): string {
        return `El coche está arrancando.`
    }
}

export class Moto extends Vehiculo {
    constructor(marca: string, modelo: string) {
        super(marca, modelo)
    }

    public arrancar(): string {
        return `La moto está arrancando`
    }
}




