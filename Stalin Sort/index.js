function stalinSort(array) {
  for(let i =1; i<array.length; i++){
    if(array[i] < array[i-1]){
     array.splice(i,1);
     console.log("Расстрелять!")
      i--
    }
  }
}