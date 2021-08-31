import { configOsci } from "../start.js"
import { drawSignals } from "./display.js"
const scaleCH1 = document.getElementById('scaleCH1')
const scaleCH2 = document.getElementById('scaleCH2')
const scaleTimer = document.getElementById('scaleTimer')

export function changeVolCH1(){
    if(!configOsci.clickPower){
        switch(configOsci.osci.scalVolCH1){
            case 20:
                configOsci.giro[4] = 22.5
                configOsci.osci.scalVolCH1 = 10
                scaleCH1.innerHTML = '10 [V]'
            break;
            case 10:
                configOsci.giro[4] = 45
                configOsci.osci.scalVolCH1 = 5
                scaleCH1.innerHTML = '5 [V]'
            break;
            case 5:
                configOsci.giro[4] = 67.5
                configOsci.osci.scalVolCH1 = 2
                scaleCH1.innerHTML = '2 [V]'
            break;
            case 2:
                configOsci.giro[4] = 90
                configOsci.osci.scalVolCH1 = 1
                scaleCH1.innerHTML = '1 [V]'
            break;
            case 1:
                configOsci.giro[4] = 112.5
                configOsci.osci.scalVolCH1 = 0.5
                scaleCH1.innerHTML = '0.5 [V]'
            break;
            case 0.5:
                configOsci.giro[4] = 135
                configOsci.osci.scalVolCH1 = 0.2
                scaleCH1.innerHTML = '200 [mV]'
            break;
            case 0.2:
                configOsci.giro[4] = 157.5
                configOsci.osci.scalVolCH1 = 0.1
                scaleCH1.innerHTML = '100 [mV]'
            break;
            case 0.1:
                configOsci.giro[4] = 180
                configOsci.osci.scalVolCH1 = 0.05
                scaleCH1.innerHTML = '50 [mV]'
            break;
            default:
                configOsci.giro[4] = 0
                configOsci.osci.scalVolCH1 = 20
                scaleCH1.innerHTML = '20 [V]'
            break;
        }
        document.getElementById('volCH1').style.transform = 'rotate(' + configOsci.giro[4]+ 'deg)'
        drawSignals()
    }    
}

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

export function changeFrecCH1 () {
    if(!configOsci.clickPower){
        switch(configOsci.osci.scalfrec){
            case 5:
                configOsci.giro[6] = 22.5
                configOsci.osci.scalfrec = 2
                scaleTimer.innerHTML = '2 [ms]'
            break;
            case 2:
                configOsci.giro[6] = 45
                configOsci.osci.scalfrec = 1
                scaleTimer.innerHTML = '1 [ms]'
            break;
            case 1:
                configOsci.giro[6] = 67.5
                configOsci.osci.scalfrec = 1/2
                scaleTimer.innerHTML = '0.5 [ms]'
            break;
            case 1/2:
                configOsci.giro[6] = 90
                configOsci.osci.scalfrec = 1/5
                scaleTimer.innerHTML = '0.2 [ms]'
            break;
            case 1/5:
                configOsci.giro[6] = 112.5
                configOsci.osci.scalfrec = 1/ 10
                scaleTimer.innerHTML = '0.1 [ms]'
            break;
            case 1/10:
                configOsci.giro[6] = 135
                configOsci.osci.scalfrec = 1/20
                scaleTimer.innerHTML = '50 [µs]'
            break;
            case 1/20:
                configOsci.giro[6] = 157.5
                configOsci.osci.scalfrec = 1/50
                scaleTimer.innerHTML = '20 [µs]'
            break;
            case 1/50:
                configOsci.giro[6] = 180
                configOsci.osci.scalfrec = 1/100
                scaleTimer.innerHTML = '10 [µs]'
            break;
            default:
                configOsci.giro[6] = 0
                configOsci.osci.scalfrec = 5
                scaleTimer.innerHTML = '5 [ms]'
            break;
        }
        document.getElementById('timer').style.transform = 'rotate(' + configOsci.giro[6]+ 'deg)'
        drawSignals()
    }
}