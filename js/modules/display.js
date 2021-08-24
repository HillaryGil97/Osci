import { configOsci } from "./start.js"
export const canva = document.getElementById('draw')
var ctx = canva.getContext('2d')
const X = 450
const Y = 410

export function gridBegin(){ //Función para dibujar las lineas de escala del osciloscopio
    for(let i=0;i<X;i=i+45){  //para el eje de las Y
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

export function CH2 () { //función para dibujar el canal 2
    ctx.beginPath();
    ctx.moveTo(0,configOsci.CH2.vol);
    ctx.lineTo(450,configOsci.CH2.vol);
    ctx.strokeStyle = 'rgb(0,0,255)'
    ctx.stroke();
    console.log(configOsci.CH2.vol)
}