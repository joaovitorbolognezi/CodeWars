## 🧠 Desafio

Você receberá um array de strings. Sua tarefa é:

- Ordenar o array em ordem alfabética (respeitando ASCII e case-sensitive)
- Retornar a **primeira string** após a ordenação
- Formatar essa string colocando `"***"` entre cada letra

⚠️ Não é permitido adicionar ou remover elementos do array.

---

## 🚀 Solução

1. Utilizar o método `.sort()` para ordenar o array de strings
2. Acessar o primeiro elemento com `[0]`
3. Usar `.split('')` para separar as letras da string
4. Usar `.join('***')` para juntar as letras com `"***"` entre elas