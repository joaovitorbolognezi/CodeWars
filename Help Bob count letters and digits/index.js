function countLettersAndDigits(input) {
  let num = 0;
  for(let i = 0; i < input.length; i++){
    let comp = input.charCodeAt(i);
    if((comp>= 48 && comp<=57) || (comp>= 65 && comp<= 90) || (comp>=97 && comp <= 122)){
      num += 1; 
      }
  }
  return num;
}