function soma (a,b){
    while(b !== 0){
        const carry = (a & b) << 1;
        a = a ^ b;
        b = carry;
    }
    return a;
}

console.log(soma(0.79,1.35));