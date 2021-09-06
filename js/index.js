//**********************************MODULO PARA GUARDAR LOS VALORES DE LAS SEÑALES

export function getValues(){
    let volCH1 = parseFloat(document.getElementById("volCH1").value)
    let frecCH1 = parseFloat(document.getElementById("frecCH1").value)
    let volCH2 = parseFloat(document.getElementById("volCH2").value)

    //guardando las variables de manera local
    localStorage.setItem('volCH1',volCH1)
    localStorage.setItem('frecCH1',frecCH1)
    localStorage.setItem('volCH2',volCH2)
}

var start = document.getElementById("boton")

start.addEventListener('click',getValues)

