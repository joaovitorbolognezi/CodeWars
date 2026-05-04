# Ajudar Bob a contar letras e digitos. 

## 🧠 Desafio

Crie um metodo que determine quantas letras (ambas caixa alta e caixa baixa ASCII) e digitos tem em uma string já informado

### Exemplos

- Dado `hel2!lo` → retorna `6`  
- Dado `!?..A` → retorna `1`  

---

## 🚀 Solução

Utilizar um `for` para percorrer a string, verificando cada caracter e validando se é uma letra ou digito, caso for ele soma em uma variavel que depois retorna ao usuario o total
 
Para identificar cada caractere foi usado o metodo `charCodeAt(i)` que retorna o codigo ASCII da posicao `i`, verificando se ele esta nas faixas de letras maiusculas (65-90), minusculas (97-122) ou digitos (48-57). Caracteres especiais ficam fora dessas faixas e sao ignorados.