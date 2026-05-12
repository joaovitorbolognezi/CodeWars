function growingPlant(upSpeed, downSpeed, desiredHeight) {
  let altura = 0;
  let dias = 0;
  do{
    altura += upSpeed;
    dias ++
    
    if(altura >= desiredHeight){
      return dias
    }
    
    altura -= downSpeed;
    
  }while(altura < desiredHeight)
}