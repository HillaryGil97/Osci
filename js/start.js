import { gridBegin,drawLines } from "./modules/display.js"

export var configOsci = {
    osci : {
        volCH1 : 20

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

gridBegin()
drawLines()