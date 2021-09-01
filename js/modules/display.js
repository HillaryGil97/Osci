//**************************************************MODULO PARA PONER TODAS LAS FUNCIONES DE DIBUJO
import { configOsci } from "../start.js"
//variables necesarias para el area del display
export const canva = document.getElementById('draw')
var ctx = canva.getContext('2d')
const X = 450
const Y = 410

function gridBegin(){ //Función para dibujar las lineas de escala del osciloscopio
    for(let i=0;i<X;i=i+45){ //para el eje de las Y
        ctx.beginPath();
        ctx.moveTo(i,0);
        ctx.lineTo(i,410);
        i===225 ? ctx.strokeStyle = 'rgb(13,60,60)': ctx.strokeStyle = 'rgb(35,160,160)';
        ctx.stroke();
    }
    for(let i=0;i<Y;i=i+41){ //para el eje de las X
        ctx.beginPath();
        ctx.moveTo(0,i);
        ctx.lineTo(450,i);
        i===205 ? ctx.strokeStyle = 'rgb(13,60,60)': ctx.strokeStyle = 'rgb(35,160,160)';
        ctx.stroke();
    }
}

export function drawSignals(){
    canva.width=canva.width//borrando el display
    gridBegin()
    if(configOsci.signals.CH1.ban){
        drawCH1()
    }
    if(configOsci.signals.CH2.ban){
        drawCH2()
    }
}

function drawCH2(){
    let piv = configOsci.osci.posYCH2 + 205 //para la linea pivote
    let sign = piv - ((configOsci.signals.CH2.vol*41)/configOsci.osci.scalVolCH2) //para la señal
    
    //dibujando gráfica
    ctx.beginPath();
    ctx.setLineDash([])//para desactivar las lineas punteadas
    ctx.moveTo(0,sign);
    ctx.lineTo(450,sign);
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'rgb(0,0,255)'
    ctx.stroke()

    //dibujando una linea de pivote
    ctx.beginPath();
    ctx.setLineDash([10, 10])//para que la linea sea punteada
    ctx.moveTo(0,piv);
    ctx.lineTo(450,piv);
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'rgb(0,0,255)'
    ctx.stroke()
}


//FUNCIONES PARA EL CANAL 1

function drawSin(frec,amp,desX, desY, intens, color){//función para dibujar una senoidal
    console.log()
    for(let i=0;i<X;i=i+0.05){
        let ang = (Math.PI*i)/2
        let funY = amp*Math.sin((ang*frec) + desX)+205+desY
        ctx.beginPath();
        ctx.arc(i,funY, intens, 0, Math.PI * 2, true)
        ctx.strokeStyle = color
        ctx.stroke();
    }
}

function drawCH1(){
    let posX = configOsci.osci.posX
    let piv = configOsci.osci.posYCH1 + 205
    let sign = (configOsci.signals.CH1.vol*41)/configOsci.osci.scalVolCH1
    let frec = 0.1 * configOsci.osci.scalfrec * configOsci.signals.CH1.frec
    //dibujando una linea de pivote
    ctx.beginPath();
    ctx.setLineDash([10, 10])//para que la linea sea punteada
    ctx.moveTo(0,piv);
    ctx.lineTo(450,piv);
    ctx.strokeStyle = 'rgb(255,0,0)'
    ctx.stroke()

    //dibujando la señal sinosoidal
    drawSin(frec,sign,posX, piv-205, configOsci.osci.nivFocus, configOsci.signals.CH1.color)
}
