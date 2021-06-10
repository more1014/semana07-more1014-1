const vv:number= parseInt (prompt("ingrese el valor de venta de el producto   ")as string);
const igv=(vv*0.19);
const pv=(vv+igv);

alert (`el igv es ${igv} y el precio de la venta es ${pv}`);