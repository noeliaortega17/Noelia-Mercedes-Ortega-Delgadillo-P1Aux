const carta = 'bici coche playStation peluche _almidon balón _playstation bici coche peluche';

function filtrada( carta ){
const separado = carta.toLowerCase().trim().split(' ');
let newData = separado.slice();
let chartNoInclude = /^_/;

const dataLimpia = newData.filter( ( palabras, index ) => {
return !chartNoInclude.test( palabras );

});

return dataLimpia.reduce((previewValue , currentValue) => {
previewValue[currentValue] = (previewValue[currentValue] ||0 ) +1
return previewValue;
},{});

}


console.log( filtrada( carta ));