# Jogo de Adivinhação

## 🧠 Desafio

Imagine que você está criando um jogo onde o usuário precisa adivinhar um número correto, mas existe um limite de tentativas.

### Regras

- Se o usuário ultrapassar o número de tentativas → deve lançar um erro
- Se acertar o número → retorna `true`
- Se errar → retorna `false` e perde uma vida

---

## 🚀 Solução

Criar uma classe com o número correto e a quantidade de vidas.  
A cada tentativa, verifica se ainda há vidas disponíveis.  
Se acertar, retorna `true`. Caso contrário, diminui uma vida e retorna `false`.  
Se as vidas acabarem, lança um erro.