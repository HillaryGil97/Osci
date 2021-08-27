import { gridBegin, drawSignals } from "./modules/display.js"
import { startMe } from "./modules/control.js"

export var configOsci = {
    clickPower : true, //----------------> variable para indicar el estado del osciloscopio
    botones : {
        //los botones de control
        power : document.getElementById('power'),
        auto : document.getElementById('auto'),
        focus : document.getElementById('focus'),

        //los botones de posición
        posYCH1 : document.getElementById('yPos1'),
        posYCH2 : document.getElementById('yPos2'),
        posX : document.getElementById('xPos'),

        //los botones de valores
        volCH1 : document.getElementById('volCH1'),
        volCH2 : document.getElementById('volCH2'),
        timer : document.getElementById('timer'),

        //los botones de activación de canales
        CH1 : document.getElementById('CH1'),
        CH2 : document.getElementById('CH2'),
    },
    giro : [0,0,0,0,0,0,0], //orden [focus, yPos1, yPos2, XPos,volCH1,volCH2,timer]
    osci : {
        scalCH1 : 20,
        scalfrec : 20,
        scalvolCH2 : 20,
        posYCH1 : 0,
        posYCH2 : 0,
        posX: 0,
    },
    signals : {
        CH1 : {
            ban : false,
            color: 'rgb(139, 11, 11)',
            vol : 1,
            frec : 1
        },
        CH2 : {
            ban : false,
            color: 'rgb(139, 11, 11)',
            vol : 1,
        }
    }
}

configOsci.signals.CH1.vol = localStorage.getItem('volCH1')
configOsci.signals.CH1.frec = localStorage.getItem('frecCH1')
configOsci.signals.CH2.vol = localStorage.getItem('volCH2')

power.addEventListener('click',startMe)