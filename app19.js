export default function contains(store, product) {
    
    let contenido = convertirArray(store)
    console.log(contenido)
    let buscar = contenido.find( element => element == product)
    if (buscar){
    return true
    }else{
    return false
    }
    
    }
    function convertirArray(obj) {
    let resultado = [];
    for (const prop in obj) {
    const valor = obj[prop];
    if (typeof valor === 'object') {
    resultado = resultado.concat(convertirArray(valor))
    }
    else {
    resultado.push(valor);
    }
    
    }
    return resultado;
    }