//**********************************MODULO PARA GUARDAR LOS VALORES DE LAS SEÑALES

export function getValues(){
    let volCH1 = parseInt(document.getElementById("volCH1").value, 10)
    let frecCH1 = parseInt(document.getElementById("frecCH1").value, 10)
    let volCH2 = parseInt(document.getElementById("volCH2").value, 10)

    //guardando las variables de manera local
    localStorage.setItem('volCH1',volCH1)
    localStorage.setItem('frecCH1',frecCH1)
    localStorage.setItem('volCH2',volCH2)
}

var start = document.getElementById("boton")

start.addEventListener('click',getValues)

