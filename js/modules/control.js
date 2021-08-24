import {canva, gridBegin, CH2} from "./display.js"
import { configOsci } from "./start.js"

export function startMe(){ //Función incial que llama a todos los demás eventos
    if(configOsci.clickPower){
        gridBegin()
        //Empezando a captar los eventos de los botones y las perillas
        CH2()
    }else{
        console.log('hay que resetear todo')       
    }
    configOsci.clickPower = !configOsci.clickPower
}

