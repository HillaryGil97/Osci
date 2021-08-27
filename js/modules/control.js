import { configOsci } from "../start.js";
import { gridBegin, canva } from "./display.js";
import { changeYPosCH2 } from "./position.js";

export function startMe () {
    if(configOsci.clickPower){
        gridBegin()
        configOsci.botones.posYCH2.addEventListener('click',changeYPosCH2)
        configOsci.clickPower = false
    }else{
        reset()
    }
}

function reset () {
    canva.width=canva.width//borrando el display
    configOsci.clickPower = true
}
