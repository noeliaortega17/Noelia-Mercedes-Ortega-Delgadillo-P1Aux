let number = prompt("Introduce array de numeros:");
let pares = "";
let impares = "";
for (let i = 0; i < number.length; i=i+2)
{
if (number.charAt(i) % 2 == 0)
{
    pares= pares + number.charAt(i) + " ";
}
else 
{

    impares= impares + number.charAt(i) + " ";
}
}
    document.write("Números pares: " + pares);
    document.write("Números impares: " + impares);
