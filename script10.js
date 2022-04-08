let precio = prompt("Introduce precio:");
let iva = prompt("Introduce iva:");
precio = parseInt(precio)
if (iva == "" ) {
    total = (precio*0.21)+precio;
}
else
{
    iva = parseInt(iva)
    total = (precio*(iva/100))+precio;
}
document.write("total " + total);