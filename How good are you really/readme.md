# Quão bom você realmente é?

## 🧠 Desafio

Houve uma prova na sua turma e você passou. Parabéns!

Mas você é uma pessoa ambiciosa. Você quer saber se é melhor que o aluno médio da sua classe.

Você recebe um array com as notas dos seus colegas. Agora calcule a média e compare com a sua nota!

Retorne true se você for melhor, caso contrário, false.

Observação:
Sua nota não está incluída no array das notas da turma. Não se esqueça disso ao calcular a média!

## 🚀 Solução

A solução percorre o array de notas da turma utilizando reduce para somar todos os valores. Em seguida, calcula a média dividindo a soma pela quantidade de alunos. Por fim, compara a média obtida com a minha nota e retorna true se ela for maior, caso contrário retorna false.