let c = parseInt(prompt('ingrese capital'));
let r = parseInt(prompt('Tasa de interes'));
let t = parseInt(prompt('tiempo'));

let x = 1 + r / 100;
let m = Math.pow(x, t) * c;

let i = m - c;

alert(m, i);
