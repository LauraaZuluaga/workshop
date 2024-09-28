

export class Persona {
    nombre: string;
    private edad: number;
    direccion: Direccion;

    constructor(nombre: string, edad: number, direccion: Direccion) {
        this.nombre = nombre;
        this.edad = edad;
        this.direccion = direccion;
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
}

export class Empleado extends Persona {
    salario: number;

    constructor(nombre: string, edad: number, salario: number, direccion: Direccion) {
        super(nombre, edad, direccion)
        this.salario = salario;
    }

    trabajar(horas: number): string {
        return `Cantidad de horas trabajadas en el dia: ${horas}.`
    }

    override saludar(): string {
        return `Persona: Su nombre es ${this.nombre} y tiene ${this.getEdad()} años. Su salario es de ${this.salario} dolares.`;
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

