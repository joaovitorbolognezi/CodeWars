function tripleTrouble(one, two, three){
  let resultado = "";
  for(let i=0; i < one.length; i++){
    resultado += one[i] + two[i] + three[i];
  }
  return resultado;
 }