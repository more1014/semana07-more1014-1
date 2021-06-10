const c:number=parseInt(prompt('ingrese capital')as string);

{
const r=parseInt(prompt('Tasa de interes')as string);
const t=parseInt(prompt('tiempo')as string);


const x=(1+r/100);
const m= Math.pow(x,t)*c; 

const i=(m-c);

alert(`el interes ganado es ${m} y el monto producido es ${i}`);
}