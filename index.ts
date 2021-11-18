class Pacientes {
    nombre: string;
    apellido: string;
    edad: number;

    constructor(n: string, a: string, e: number){
        this.nombre = n;
        this.apellido = a;
        this.edad = e;
    }
    mostrarPaciente (){
        
        console.log("Nombre: " + this.nombre + "\nApellido: " + this.apellido)
    }
}

 class Turnos {
    dia: number;
    mes: number;
    anio: number;
    hora: string;
    constructor(dia: number, mes: number, anio: number, hora: string){
        this.dia= dia;
        this.mes= mes;
        this.anio= anio;
        this.hora= hora;
 }
    mostrarTurno (){

        console.log(`El turno es el ${this.dia}-${this.mes}-${this.anio} a las ${this.hora}`)

    }


}


let paciente1: Pacientes = new Pacientes ("Lucia", "Zuleta", 27);
let turno1: Turnos = new Turnos (3, 12, 2021, "10.30")

paciente1.mostrarPaciente();
turno1.mostrarTurno();