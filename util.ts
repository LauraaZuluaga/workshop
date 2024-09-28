import { Persona } from "./Persona"

export const saludarPersona = (jsonDatosPersona: any): void  => {
    const persona = new Persona(
        jsonDatosPersona.nombre,
        jsonDatosPersona.edad,
        {
            calle: jsonDatosPersona.direccion.calle, 
            ciudad: jsonDatosPersona.direccion.ciudad,
            pais: jsonDatosPersona.direccion.pais
        }
    )
    console.log(persona.saludar());
};

export const jsonDatosPersona = {
    "nombre": "Laura", 
    "edad": 18,
    "direccion": {
        "calle": "5042", 
        "ciudad": "Medellin", 
        "pais": "Colombia"
    }
};

saludarPersona(jsonDatosPersona);