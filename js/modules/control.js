import { configOsci } from "../start.js";
import { canva, drawSignals } from "./display.js";
import { changeYPosCH2, changeYPosCH1} from "./position.js";
import { changeVolCH2, changeVolCH1, changeFrecCH1} from "./values.js";
import { activeCH2, activeCH1} from "./channels.js";

export function startMe () {
    if(configOsci.clickPower){
        drawSignals()
        //funciones de control
        configOsci.botones.focus.addEventListener('click',changeNivFocus)

        //funciones de posición
        configOsci.botones.posYCH1.addEventListener('click',changeYPosCH1)
        configOsci.botones.posYCH2.addEventListener('click',changeYPosCH2)

        //funciones de escala
        configOsci.botones.volCH1.addEventListener('click',changeVolCH1)
        configOsci.botones.timer.addEventListener('click',changeFrecCH1)
        
        configOsci.botones.volCH2.addEventListener('click',changeVolCH2)

        //activación de canales
        configOsci.botones.CH1.addEventListener('click', activeCH1)
        configOsci.botones.CH2.addEventListener('click', activeCH2)

        configOsci.clickPower = false
    }else{
        reset()
    }
}

function reset () {
    canva.width=canva.width//borrando el display
    configOsci.clickPower = true
}

function changeNivFocus(){//Función para aumentar el focus del osciloscopio
    if(!configOsci.clickPower){
        configOsci.giro[0] = configOsci.giro[0] + 10
        if(configOsci.osci.nivFocus < 0.5)// nivFocus va a llegar solo hasta 0.5 y se regresará a 0 para volverlo a incrementar
            configOsci.osci.nivFocus = configOsci.osci.nivFocus + 0.02
        else{
            configOsci.osci.nivFocus = 0
            configOsci.giro[0] = 0
        }
        canva.width=canva.width;
        document.getElementById('focus').style.transform = 'rotate(' + configOsci.giro[0]+ 'deg)'
        drawSignals()
    }
}

