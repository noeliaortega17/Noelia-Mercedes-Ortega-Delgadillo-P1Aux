function functionR(ids) {
    let salida;
    const aux = [...Array(ids.length).keys()];
    const res = ids.sort((a, b) => a - b);
    (JSON.stringify(aux) === JSON.stringify(res))
      ?
        salida = res.at(-1) + 1
      :
      (
        res.forEach((_, index, arr) => {
          if (arr.indexOf(index) === -1) {
            salida = index;
          }
        })
      )
    return salida;
  }
  
  console.log(functionR([0, 2, 3]))
  