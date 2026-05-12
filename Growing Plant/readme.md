# Desafio 1 — Contar letras e dígitos

## Objetivo
Retornar quantas letras e dígitos tem na string, ignorando caracteres especiais.

## Exemplos
- `"hel2!lo"` → `6`
- `"!?..A"` → `1`

## Solução
Usar um `for` percorrendo a string com `charCodeAt(i)` para checar as faixas ASCII:

| Faixa | Representa |
|-------|-----------|
| 48–57 | dígitos (0–9) |
| 65–90 | maiúsculas (A–Z) |
| 97–122 | minúsculas (a–z) |

---

# Desafio 2 — Crescimento da planta

## Objetivo
Retornar em quantos dias a planta atinge `desiredHeight`.

## Exemplos
- `up=100, down=10, h=910` → `10 dias`
- `up=10, down=9, h=4` → `1 dia`

## Inputs
- `upSpeed` — crescimento diário (5–100)
- `downSpeed` — queda noturna (2 até < upSpeed)
- `desiredHeight` — altura alvo (4–1000)

## Solução

```js
do {
    altura += upSpeed
    dias++
    if (altura >= desiredHeight) return dias
    altura -= downSpeed
} while (altura < desiredHeight)
```

> O `if` no meio é essencial — se a planta atingiu a altura durante o dia, a noite não desconta.