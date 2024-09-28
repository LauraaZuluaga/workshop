

export class Persona {
    nombre: string;
    private edad: number;
    direccion: Direccion;
    vehiculos: Vehiculo[];

    constructor(nombre: string, edad: number, direccion: Direccion, vehiculos: Vehiculo[] = []) {
        this.nombre = nombre;
        this.edad = edad;
        this.direccion = direccion;
        this.vehiculos = vehiculos;
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

    constructor(nombre: string, edad: number, salario: number, direccion: Direccion, vehiculos: Vehiculo[] = []) {
        super(nombre, edad, direccion, vehiculos);
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




