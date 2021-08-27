import { configOsci } from "../start.js"
import { gridBegin, drawSignals } from "./display.js"

export function changeYPosCH2(){
    if(!configOsci.clickPower){
        console.log(configOsci.osci.posYCH2)
        configOsci.osci.posYCH2 = configOsci.osci.posYCH2 + 10
        drawSignals()
    }
}
