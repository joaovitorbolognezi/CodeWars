function betterThanAverage(classPoints, yourPoints) {
 const sum = classPoints.reduce((acumulador,valorAtual) => acumulador + valorAtual);
 const average = (sum/classPoints.length);
 if(average >= yourPoints){
   return false
 }else
   return true
}
