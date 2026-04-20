# Sum of Two Integers — 6 kyu
 
Somar dois inteiros sem usar `+`, `-` ou qualquer operador aritmético.
E para Javascript: os métodos reduce de Array estão desativados, juntamente com eval, require e module.
 
## Solução
 
```js
function soma(a, b) {
  while (b !== 0) {
    const carry = (a & b) << 1;
    a = a ^ b;
    b = carry;
  }
  return a;
}
```
 
## Como funciona
 
A ideia é simular o que a soma faz internamente, operando bit a bit:
 
- **XOR (`^`)** — soma os bits sem se preocupar com o carry
- **AND (`&`) + shift (`<<`)** — calcula onde tem carry e move pra coluna certa
O loop repete até não sobrar carry nenhum, aí `a` é o resultado final.
 
## Exemplos
 
```js
soma(3, 5)    //  8
soma(-3, 5)   //  2
soma(-3, -3)  // -6
soma(0, 0)    //  0
```