
    let cadena = prompt("Introduce una cadena de texto:");
    let numchar = cadena.length;    //Devuelve la longitud del string.
    cadena = cadena.toUpperCase();  //Devuelve el string en mayúsculas.
    let car;
    let contador = 0;
    let contador2 = 0;
    let i;
    for (i = 0; i < numchar; i++) {
        car = cadena.charAt(i);    //recupera el caracter i del string.
        if ((car == "A") || (car == "E") || (car == "I") || (car == "O") || (car == "U")) {
            contador++;
        }
        else
          contador2++;
    }
    document.write("Número de Vocales: " + contador + ".");
    document.write("Número de Consonantes: " + contador2 + ".");


    






