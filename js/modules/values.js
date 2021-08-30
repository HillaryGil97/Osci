import { configOsci } from "../start.js"
import { gridBegin, drawSignals } from "./display.js"
const scaleCH1 = document.getElementById('scaleCH1')
const scaleCH2 = document.getElementById('scaleCH2')
const scaleTimer = document.getElementById('scaleTimer')

export function changeVolCH2(){
    if(!configOsci.clickPower){
        switch(configOsci.osci.scalVolCH2){
            case 20:
                configOsci.giro[5] = 22.5
                configOsci.osci.scalVolCH2 = 10
                scaleCH2.innerHTML = '10 [V]'
            break;
            case 10:
                configOsci.giro[5] = 45
                configOsci.osci.scalVolCH2 = 5
                scaleCH2.innerHTML = '5 [V]'
            break;
            case 5:
                configOsci.giro[5] = 67.5
                configOsci.osci.scalVolCH2 = 2
                scaleCH2.innerHTML = '2 [V]'
            break;
            case 2:
                configOsci.giro[5] = 90
                configOsci.osci.scalVolCH2 = 1
                scaleCH2.innerHTML = '1 [V]'
            break;
            case 1:
                configOsci.giro[5] = 112.5
                configOsci.osci.scalVolCH2 = 0.5
                scaleCH2.innerHTML = '0.5 [V]'
            break;
            case 0.5:
                configOsci.giro[5] = 135
                configOsci.osci.scalVolCH2 = 0.2
                scaleCH2.innerHTML = '200 [mV]'
            break;
            case 0.2:
                configOsci.giro[5] = 157.5
                configOsci.osci.scalVolCH2 = 0.1
                scaleCH2.innerHTML = '100 [mV]'
            break;
            case 0.1:
                configOsci.giro[5] = 180
                configOsci.osci.scalVolCH2 = 0.05
                scaleCH2.innerHTML = '50 [mV]'
            break;
            default:
                configOsci.giro[5] = 0
                configOsci.osci.scalVolCH2 = 20
                scaleCH2.innerHTML = '20 [V]'
            break;
        }
        
        document.getElementById('volCH2').style.transform = 'rotate(' + configOsci.giro[5]+ 'deg)'
        drawSignals()
    }
}