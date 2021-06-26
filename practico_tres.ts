
export class Vehiculo {
    patente: string;
    marca: string;
    modelo: string;
    hojasRutas: HojasRuta[];

    constructor(patente: string, marca: string, modelo: string) {
        this.patente = patente;
        this.marca = marca;
        this.modelo = modelo;
        this.hojasRutas=[];
    }

    agregarHojas(hoja: HojasRuta) {
       this.hojasRutas.push(hoja);
    }

    eliminarHojas(hoja: HojasRuta) {
        let i = this.hojasRutas.lastIndexOf(hoja);
        this.hojasRutas.splice(i);
    }

    calcularTotalKilometrosRecorridos(fechaDesde: Date, fechaHasta: Date) {
        let sumaKmTotal: number = 0;
        for (let hoja of this.hojasRutas) {
            if (hoja.fecha >= fechaDesde && hoja.fecha <= fechaHasta) {
                sumaKmTotal = hoja.calcularTotalKilometros();
            }
        }
        return sumaKmTotal;
    }
}

export class HojasRuta {
    fecha: Date;
    numero: number;
    vehiculo: Vehiculo;
    detalles: Detalle[];

    constructor(fecha: Date, numero: number, vehiculo: Vehiculo) {
        this.fecha = fecha;
        this.numero = numero;
        this.vehiculo = vehiculo;
        this.detalles=[];
    }

    agregarDetalles(detalle: Detalle) {
        this.detalles.push(detalle);
    }

    eliminarDetalles(detalle: Detalle) {
        let i = this.detalles.lastIndexOf(detalle);
        this.detalles.splice(i);
    }

    calcularTotalKilometros():number {
        let sumaKm: number = 0;
        for (let detail of this.detalles) {
            sumaKm = sumaKm + (detail.kmRegreso - detail.kmSalida);
        }
        return sumaKm;
    }

}

export class Detalle {
    kmSalida: number;
    kmRegreso: number;
    horaSalida: number;
    horaRegreso: number;
    minutoSalida: number;
    minutoRegreso: number;
    hojaRuta: HojasRuta;

    constructor(kmSalida: number, kmRegreso: number, horaSalida: number,
        horaRegreso: number, minutoSalida: number, minutoRegreso: number, hojaRuta: HojasRuta) {
        this.kmSalida = kmSalida;
        this.kmRegreso = kmRegreso;
        this.horaSalida = horaSalida;
        this.horaRegreso = horaRegreso;
        this.minutoSalida = minutoSalida;
        this.minutoRegreso = minutoRegreso;
        this.hojaRuta = hojaRuta;
    }


}

class TestA{
    vehiculo=new Vehiculo('ABC 123','Fiat','Cronos');
    
    fecha1 = new Date(2021,3,17);
    fecha2 = new Date(2021,4,17);
    fecha3 = new Date(2021,2,17);

    hojaRutaA=new HojasRuta(this.fecha1,1, this.vehiculo);
    hojaRutaB=new HojasRuta(this.fecha2,2, this.vehiculo);
    hojaRutaC=new HojasRuta(this.fecha3,3, this.vehiculo);

    detalleA=new Detalle(1500,1600,8,12,30,30,this.hojaRutaA);
    detalleB=new Detalle(1600,1700,12,16,30,30,this.hojaRutaA);
    detalleC=new Detalle(1700,1800,16,18,30,30,this.hojaRutaA);

    detalleD=new Detalle(2000,2100,8,12,30,30,this.hojaRutaB);
    detalleE=new Detalle(2200,2300,12,16,30,30,this.hojaRutaB);
    detalleF=new Detalle(2300,2500,16,18,30,30,this.hojaRutaB);

    detalleG=new Detalle(2400,2500,8,12,30,30,this.hojaRutaC);
    detalleH=new Detalle(2500,2600,12,16,30,30,this.hojaRutaC);
    detalleI=new Detalle(2600,2800,16,18,30,30,this.hojaRutaC);

    constructor(){
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
        this.hojaRutaC.agregarDetalles(this.detalleH)
        this.hojaRutaC.agregarDetalles(this.detalleI)
    }

    main(){
        document.body.innerHTML=`Total de km de la hoja A: ${this.hojaRutaA.calcularTotalKilometros()}`;
        //document.body.innerHTML=`Total de km de la hoja B: ${this.hojaRutaB.calcularTotalKilometros()}`;
        //document.body.innerHTML=`Total de km de la hoja C: ${this.hojaRutaC.calcularTotalKilometros()}`;
    }

}

let test:TestA = new TestA();

test.main();
