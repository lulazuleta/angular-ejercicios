var Pacientes = /** @class */ (function () {
    function Pacientes(n, a, e) {
        this.nombre = n;
        this.apellido = a;
        this.edad = e;
    }
    Pacientes.prototype.mostrarPaciente = function () {
        console.log("Nombre: " + this.nombre + "\nApellido: " + this.apellido);
    };
    return Pacientes;
}());
var Turnos = /** @class */ (function () {
    function Turnos(dia, mes, anio, hora) {
        this.dia = dia;
        this.mes = mes;
        this.anio = anio;
        this.hora = hora;
    }
    Turnos.prototype.mostrarTurno = function () {
        console.log("El turno es el ".concat(this.dia, "-").concat(this.mes, "-").concat(this.anio, " a las ").concat(this.hora));
    };
    return Turnos;
}());
var paciente1 = new Pacientes("Lucia", "Zuleta", 27);
var turno1 = new Turnos(3, 12, 2021, "10.30");
paciente1.mostrarPaciente();
turno1.mostrarTurno();
