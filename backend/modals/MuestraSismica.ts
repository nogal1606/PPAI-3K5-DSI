import DetalleMuestraSismica from "./DetalleMuestraSismica"

class MuestraSismica{
    fechaHoraMuestra: Date;
    detalle: DetalleMuestraSismica;

    constructor(fechaHoraMuestra: Date, detalle: DetalleMuestraSismica){
        this.fechaHoraMuestra = fechaHoraMuestra;
        this.detalle = detalle;
    }

    getDatos(){
        return (this.detalle.getDatos() + this.fechaHoraMuestra.toString())
    }
}

export default MuestraSismica