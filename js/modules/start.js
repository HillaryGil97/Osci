export var signals = {
    CH1 : {
        ban : false,
        color: 'rgb(139, 11, 11)',
        vol : 1,
        frecuencia : 1
    },
    CH2 : {
        ban : false,
        color: 'rgb(139, 11, 11)',
        vol : 1,
    }
}

signals.CH1.vol = localStorage.getItem('volCH1')
signals.CH1.frecuencia = localStorage.getItem('frecCH1')
signals.CH2.vol = localStorage.getItem('volCH2')

