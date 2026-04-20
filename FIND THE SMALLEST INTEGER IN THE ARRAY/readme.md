# Encontrar o menor número

## 🧠 Desafio

Dado um array de números inteiros, sua solução deve encontrar o menor valor.

### Exemplos

- Dado `[34, 15, 88, 2]` → retorna `2`  
- Dado `[34, -345, -1, 100]` → retorna `-345`  

Você pode assumir que o array **não estará vazio**.

---

## 🚀 Solução

Utilizar um `for` para percorrer o array, comparando cada valor com o menor atual.  
Caso encontre um número menor, ele é atualizado até o final do loop.