"use strict";
exports.__esModule = true;
exports.Detalle = exports.HojasRuta = exports.Vehiculo = void 0;
var Vehiculo = /** @class */ (function () {
    function Vehiculo(patente, marca, modelo) {
        this.patente = patente;
        this.marca = marca;
        this.modelo = modelo;
        this.hojasRutas = [];
    }
    Vehiculo.prototype.agregarHojas = function (hoja) {
        this.hojasRutas.push(hoja);
    };
    Vehiculo.prototype.eliminarHojas = function (hoja) {
        var i = this.hojasRutas.lastIndexOf(hoja);
        this.hojasRutas.splice(i);
    };
    Vehiculo.prototype.calcularTotalKilometrosRecorridos = function (fechaDesde, fechaHasta) {
        var sumaKmTotal = 0;
        for (var _i = 0, _a = this.hojasRutas; _i < _a.length; _i++) {
            var hoja = _a[_i];
            if (hoja.fecha >= fechaDesde && hoja.fecha <= fechaHasta) {
                sumaKmTotal = hoja.calcularTotalKilometros();
            }
        }
        return sumaKmTotal;
    };
    return Vehiculo;
}());
exports.Vehiculo = Vehiculo;
var HojasRuta = /** @class */ (function () {
    function HojasRuta(fecha, numero, vehiculo) {
        this.fecha = fecha;
        this.numero = numero;
        this.vehiculo = vehiculo;
        this.detalles = [];
    }
    HojasRuta.prototype.agregarDetalles = function (detalle) {
        this.detalles.push(detalle);
    };
    HojasRuta.prototype.eliminarDetalles = function (detalle) {
        var i = this.detalles.lastIndexOf(detalle);
        this.detalles.splice(i);
    };
    HojasRuta.prototype.calcularTotalKilometros = function () {
        var sumaKm = 0;
        for (var _i = 0, _a = this.detalles; _i < _a.length; _i++) {
            var detail = _a[_i];
            sumaKm = sumaKm + (detail.kmRegreso - detail.kmSalida);
        }
        return sumaKm;
    };
    return HojasRuta;
}());
exports.HojasRuta = HojasRuta;
var Detalle = /** @class */ (function () {
    function Detalle(kmSalida, kmRegreso, horaSalida, horaRegreso, minutoSalida, minutoRegreso, hojaRuta) {
        this.kmSalida = kmSalida;
        this.kmRegreso = kmRegreso;
        this.horaSalida = horaSalida;
        this.horaRegreso = horaRegreso;
        this.minutoSalida = minutoSalida;
        this.minutoRegreso = minutoRegreso;
        this.hojaRuta = hojaRuta;
    }
    return Detalle;
}());
exports.Detalle = Detalle;
var TestA = /** @class */ (function () {
    function TestA() {
        this.vehiculo = new Vehiculo('ABC 123', 'Fiat', 'Cronos');
        this.fecha1 = new Date(2021, 3, 17);
        this.fecha2 = new Date(2021, 4, 17);
        this.fecha3 = new Date(2021, 2, 17);
        this.hojaRutaA = new HojasRuta(this.fecha1, 1, this.vehiculo);
        this.hojaRutaB = new HojasRuta(this.fecha2, 2, this.vehiculo);
        this.hojaRutaC = new HojasRuta(this.fecha3, 3, this.vehiculo);
        this.detalleA = new Detalle(1500, 1600, 8, 12, 30, 30, this.hojaRutaA);
        this.detalleB = new Detalle(1600, 1700, 12, 16, 30, 30, this.hojaRutaA);
        this.detalleC = new Detalle(1700, 1800, 16, 18, 30, 30, this.hojaRutaA);
        this.detalleD = new Detalle(2000, 2100, 8, 12, 30, 30, this.hojaRutaB);
        this.detalleE = new Detalle(2200, 2300, 12, 16, 30, 30, this.hojaRutaB);
        this.detalleF = new Detalle(2300, 2500, 16, 18, 30, 30, this.hojaRutaB);
        this.detalleG = new Detalle(2400, 2500, 8, 12, 30, 30, this.hojaRutaC);
        this.detalleH = new Detalle(2500, 2600, 12, 16, 30, 30, this.hojaRutaC);
        this.detalleI = new Detalle(2600, 2800, 16, 18, 30, 30, this.hojaRutaC);
        this.vehiculo.agregarHojas(this.hojaRutaA);
        this.vehiculo.agregarHojas(this.hojaRutaB);
        this.vehiculo.agregarHojas(this.hojaRutaC);
        this.hojaRutaA.agregarDetalles(this.detalleA);
        this.hojaRutaA.agregarDetalles(this.detalleB);
        this.hojaRutaA.agregarDetalles(this.detalleC);
        this.hojaRutaB.agregarDetalles(this.detalleD);
        this.hojaRutaB.agregarDetalles(this.detalleE);
        this.hojaRutaB.agregarDetalles(this.detalleF);
        this.hojaRutaC.agregarDetalles(this.detalleG);
        this.hojaRutaC.agregarDetalles(this.detalleH);
        this.hojaRutaC.agregarDetalles(this.detalleI);
    }
    TestA.prototype.main = function () {
        document.body.innerHTML = "Total de km de la hoja A: " + this.hojaRutaA.calcularTotalKilometros();
        //document.body.innerHTML=`Total de km de la hoja B: ${this.hojaRutaB.calcularTotalKilometros()}`;
        //document.body.innerHTML=`Total de km de la hoja C: ${this.hojaRutaC.calcularTotalKilometros()}`;
    };
    return TestA;
}());
var test = new TestA();
test.main();
