import { configOsci } from "../start.js"
import { drawSignals } from "./display.js"

export function changeYPosCH2(){
    if(!configOsci.clickPower){
        if(configOsci.osci.posYCH2 >= -205){ //habra llegado a la parte superior del display
            configOsci.giro[2] = configOsci.giro[2] + 10
            configOsci.osci.posYCH2--
        }else{
            configOsci.giro[2] = 0
            configOsci.osci.posYCH2 = 205
        }
    }
    document.getElementById('yPos2').style.transform = 'rotate(' + configOsci.giro[2]+ 'deg)'
    drawSignals()
}

export function changeYPosCH1(){
    if(!configOsci.clickPower){
        if(configOsci.osci.posYCH1 >= -205){ //habra llegado a la parte superior del display
            configOsci.giro[1] = configOsci.giro[1] + 10
            configOsci.osci.posYCH1--
        }else{
            configOsci.giro[1] = 0
            configOsci.osci.posYCH1 = 205
        }
    }
    document.getElementById('yPos1').style.transform = 'rotate(' + configOsci.giro[1]+ 'deg)'
    drawSignals()
}

export function changeXPosCH1(){
    if(!configOsci.clickPower){
        if(configOsci.osci.posX > -225){
            configOsci.giro[3] = configOsci.giro[3]+10
            configOsci.osci.posX = configOsci.osci.posX - 5
        }else{
            configOsci.giro[3] = 1
            configOsci.osci.posX = 225
        }
        document.getElementById('xPos').style.transform = 'rotate('+ configOsci.giro[3]+ 'deg)'
        drawSignals()
    }
}