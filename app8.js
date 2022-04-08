let numero = Number(prompt("Introduce un número entre 1 y 100"));
if((numero >= 1) && (numero <= 100)) {
    let x = 0;
    let y = 1;
    let z;
    
    document.write(x + "<br>");
    for (i = 0; i < (numero-1); i++) {
        z = x + y;
        document.write(z + "<br>"); 
        y = x;
        x = z;
    }
}
else {
    alert("Número erróneo");
}
  