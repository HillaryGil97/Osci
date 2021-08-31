import { drawSignals } from "./display.js"
import { configOsci } from "../start.js"

const CH1 = document.getElementById('CH1')
const CH2 = document.getElementById('CH2')

export function activeCH1(){ //función para activar el canal 2
    if(!configOsci.signals.CH1.ban){
        CH1.style.backgroundColor = 'rgb(36, 161, 89)'
        CH1.style.color = 'black'
        CH1.innerHTML = 'On'
        configOsci.signals.CH1.ban = !configOsci.signals.CH1.ban
        drawSignals()
    }else{
        CH1.style.backgroundColor = 'rgb(139, 11, 11)'
        CH1.style.color = 'white'
        CH1.innerHTML = 'Off'
        configOsci.signals.CH1.ban = !configOsci.signals.CH1.ban
        drawSignals()
    }
}

export function activeCH2(){ //función para activar el canal 2
    if(!configOsci.signals.CH2.ban){
        CH2.style.backgroundColor = 'rgb(36, 161, 89)'
        CH2.style.color = 'black'
        CH2.innerHTML = 'On'
        configOsci.signals.CH2.ban = !configOsci.signals.CH2.ban
        drawSignals()
    }else{
        CH2.style.backgroundColor = 'rgb(139, 11, 11)'
        CH2.style.color = 'white'
        CH2.innerHTML = 'Off'
        configOsci.signals.CH2.ban = !configOsci.signals.CH2.ban
        drawSignals()
    }
}