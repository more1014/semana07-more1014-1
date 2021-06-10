let vv= parseInt (prompt("ingrese el valor de venta de el producto   "));
let igv=(vv*0.19);
let pv=(vv+igv);
let resultado= `el igv es ${igv} y el precio de la venta es ${pv}`;
alert (resultado);