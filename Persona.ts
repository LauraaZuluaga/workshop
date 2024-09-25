

export class Persona {
    nombre: string;
    private edad: number;

    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar(): string {
        return `Persona: Su nombre es ${this.nombre} y tiene ${this.edad} años.`;
    }

    getEdad(): number {
        return this.edad;
    }
}

export class Empleado extends Persona {
    salario: number;
    constructor(nombre: string, edad: number, salario: number) {
        super(nombre, edad)
        this.salario = salario;
    }

    trabajar(horas: number): string {
        return `Cantidad de horas trabajadas en el dia: ${horas}.`
    }
}