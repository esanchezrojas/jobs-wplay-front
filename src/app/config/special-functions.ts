import { GeneralData } from 'src/app/config/general-data';


export class SpecialFunctions {

    public meses = GeneralData.MESES;

    formatoFecha(fecha: any) {
        GeneralData


        const offset = fecha.getTimezoneOffset()
        fecha = new Date(fecha.getTime() - (offset * 60 * 1000))
        return fecha.toISOString().split('T')[0]

    }

    calcularMes(mes: any): number {
        let indice = 0;
        for (let i = 0; i < this.meses.length; i++) {
            if (this.meses == mes) {
                indice = (i+1);
                break;
            }

        }
        return indice;
    }



}