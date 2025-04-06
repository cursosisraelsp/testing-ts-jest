# Notas

```bash
npx jest --listTests
```
Para comprobar qué arquivos atopa Jest e cales executa. 
> Por defecto, Jest localiza arquivos que cumplan con algún destes patróns:

Arquivos que estén en calquer carpeta chamada __tests__ ou `test`

Arquivos que rematen en .spec.ts, .test.ts, .spec.tsx, .test.tsx, etc.

Non necesitas definir rutas manualmente, porque Jest segue convenciones.

Busca por defecto todos os *.spec.ts, *.test.ts, ou arquivos en carpetas __tests__.

Se queres personalizar isto, deberás usar testMatch ou testRegex.

[Enlace a Jest](https://jestjs.io/es-ES/docs/expect)


## Executando vendo as mensaxes

Se queremos ver as mensaxes que introducimos en `describe` ou `test`, é recomendable agregar `--verbose` ao comando que executemos.

### Exemplo
`npx jest --verbose` ou no `package.json` a instrucción:
```json
"scripts": {
    "test": "jest --verbose"
  }
```

```bash
$ npm run test

> testing_typescript@1.0.0 test
> jest --verbose

 PASS  tests/suma.spec.ts
> testing_typescript@1.0.0 test
> jest --verbose

 PASS  tests/suma.spec.ts
> jest --verbose

 PASS  tests/suma.spec.ts

 PASS  tests/suma.spec.ts
 PASS  tests/suma.spec.ts
  Estou na funcion Suma
    √ suma dous numeros (8 ms)

 PASS  tests/claseMatematicas.spec.ts
  Probas da clase Matemáticas
    √ Clase matematicas  (8 ms)

 PASS  tests/clase.spec.ts
  estou dentro dunha clase
    √ sumo? (6 ms)
  estou dentro dunha clase con funcion tipo
    √ sumo? (1 ms)

Test Suites: 3 passed, 3 total
Tests:       4 passed, 4 total
Snapshots:   0 total
Time:        3.94 s, estimated 4 s
Ran all test suites.
```

## Executano o test con varios arquivos
>Se queremos executar todos deberemos escribir neste caso ou 

```bash
npm run test 
```
ou 
```bash
npx jest
```
```bash
$ npm run test

> testing_typescript@1.0.0 test
> jest

 PASS  tests/suma.spec.ts
 PASS  tests/claseMatematicas.spec.ts

Test Suites: 2 passed, 2 total
Tests:       2 passed, 2 total
Snapshots:   0 total
Time:        3.483 s
Ran all test suites.
```

## Executando arquivos

Podemos executar arquivos individuáis escribindo o nome do arquivo xunto con:

```bash
npx jest <nome do arquivo>
```
### Exemplo
```bash
npx jest claseMatematicas.spec.ts
```