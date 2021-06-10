{
let t=parseInt(prompt('digite el tiempo')as string);

const hora=3600;
const minuto=60;

const h=Math.trunc(t/hora);
t=(t%hora);
const m=Math.trunc(t/minuto);
const s=Math.trunc(t%minuto);

alert(`tiempo en horas es :${h} el tiempo en minutos es: ${m} eltiempo en segundos es ${s}`);

}