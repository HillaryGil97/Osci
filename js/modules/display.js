//**************************************************MODULO PARA PONER TODAS LAS FUNCIONES DE DIBUJO
import { configOsci } from "../start.js"
//variables necesarias para el area del display
export const canva = document.getElementById('draw')
var ctx = canva.getContext('2d')
const X = 450
const Y = 410

export function gridBegin(){ //Función para dibujar las lineas de escala del osciloscopio
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
        //drawSin(valTimer,CH1.vol,xPosition,CH1.posY,nivFocus,CH1.color)
    }
    if(configOsci.signals.CH2.ban){
        drawCH2()
    }
}

function drawCH2(){
    //dibujando una linea punteada
    ctx.beginPath();
    ctx.setLineDash([10, 10])
    ctx.moveTo(0,configOsci.osci.posYCH2+205);
    ctx.lineTo(450,configOsci.osci.posYCH2+205);
    ctx.strokeStyle = 'rgb(0,0,255)'
    ctx.stroke()
}


