# L1: Set Alarm

# 🧠 Desafio

Crie uma função chamada `setAlarm` que recebe dois parâmetros booleanos:

- `employed`: `true` se você está empregado  
- `vacation`: `true` se você está de férias  

A função deve retornar:

- `true` → se você está **empregado e NÃO está de férias**  
- `false` → em qualquer outro caso  

## Exemplos

- `true | true` → `false`  
- `true | false` → `true`  
- `false | true` → `false`  
- `false | false` → `false`  

---

# 🚀 Solução

Utilizar uma estrutura condicional (`if`) para verificar se a pessoa está empregada **e ao mesmo tempo** não está de férias.

Se ambas as condições forem verdadeiras, retorna `true`. Caso contrário, retorna `false`.
