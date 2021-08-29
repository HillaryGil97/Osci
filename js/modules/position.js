import { configOsci } from "../start.js"
import { gridBegin, drawSignals } from "./display.js"

export function changeYPosCH2(){
    if(!configOsci.clickPower){
        if(configOsci.osci.posYCH2 >= -205){ //habra llegado a la parte superior del display
            configOsci.giro[2] = configOsci.giro[2] + 10
            configOsci.osci.posYCH2 --
            console.log(`va pa arriba ${configOsci.osci.posYCH2}`)
        }else{
            configOsci.giro[2] = 0
            configOsci.osci.posYCH2 = 205
        }
    }
    document.getElementById('yPos2').style.transform = 'rotate(' + configOsci.giro[2]+ 'deg)'
    drawSignals()
}
