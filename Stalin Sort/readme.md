# Stalin Sort
## 🧠 Desafio
Implemente a função `stalinSort` que remove do array todo elemento que for menor que o anterior, modificando o array diretamente.
### Exemplos
```js
stalinSort([1, 2, 3, 4, 5])       // [1, 2, 3, 4, 5]
stalinSort([5, 3, 1, 2, 4])       // [5]
stalinSort([1, 2, 2, 3, 1, 4])    // [1, 2, 2, 3, 4]
stalinSort([3, 1, 4, 1, 5, 9, 2]) // [3, 4, 5, 9]
```
---
## 🚀 Solução
Percorrer o array a partir do índice `1`, comparando cada elemento com o anterior.
A cada iteração:
* se o elemento atual for **menor** que o anterior, removê-lo com `splice` e decrementar `i`
* se for **maior ou igual**, avançar normalmente