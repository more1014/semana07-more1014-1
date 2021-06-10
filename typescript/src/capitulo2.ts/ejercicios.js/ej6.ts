{
let n:number=parseInt(prompt('ingrese numero')as string);
let r= n%10;
n=(Math.trunc(n/10));
let ni=r*10;


r= n%10;
n=(Math.trunc(n/10));
ni=(ni+r)*10;


r= n%10;
n=(Math.trunc(n/10));
ni=(ni+r)*10;


r= n%10;
n=(Math.trunc(n/10));
ni=(ni+r)*10;

ni= ni+n;

alert(ni);
}