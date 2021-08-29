import { configOsci } from "../start.js";
import { gridBegin, canva, drawSignals } from "./display.js";
import { changeYPosCH2 } from "./position.js";
import { changeVolCH2 } from "./values.js";

export function startMe () {
    if(configOsci.clickPower){
        gridBegin()
        drawSignals()
        configOsci.botones.posYCH2.addEventListener('click',changeYPosCH2)
        configOsci.botones.volCH2.addEventListener('click',changeVolCH2)

        configOsci.clickPower = false
    }else{
        reset()
    }
}

function reset () {
    canva.width=canva.width//borrando el display
    configOsci.clickPower = true
}

