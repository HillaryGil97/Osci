import { configOsci } from "./start.js"
import {canva, gridBegin, CH2} from "./display.js"
import {activeCH1, activeCH2} from "./channels.js"

export function startMe(){ //Función incial que llama a todos los demás eventos
    if(configOsci.clickPower){
        gridBegin()
        configOsci.botones.CH1.addEventListener('click', activeCH1)
        configOsci.botones.CH2.addEventListener('click', activeCH2)
        //Empezando a captar los eventos de los botones y las perillas
        CH2()
    }else{
        console.log('hay que resetear todo')       
    }
    configOsci.clickPower = !configOsci.clickPower
}

