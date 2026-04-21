# Encontrar o menor número

## 🧠 Desafio

Crie uma função que retorne uma string combinando todas as letras de três strings em grupos.

### Exemplos

tripleTrouble("aa", "bb", "cc") // "abcabc"
tripleTrouble("aaa","bbb","ccc") // "abcabcabc"
tripleTrouble("Sea","urn","pms") // "Supermans"

Você pode assumir que todas as strings terão o mesmo tamanho.

---

## 🚀 Solução

Percorrer as strings com um for, usando o mesmo índice para acessar cada uma delas.

A cada iteração:

* pegar um caractere de cada string
* concatenar na variável resultado