# Notas

```bash
npx jest --listTests
```
Para comprobar qué arquivos atopa Jest e cales executa. 
> Por defecto, Jest localiza archivos que cumplan con alguno de estos patrones:

Archivos que estén en cualquier carpeta llamada __tests__

Archivos que terminen en .spec.ts, .test.ts, .spec.tsx, .test.tsx, etc.

No necesitás definir rutas manualmente, porque Jest sigue convenciones.

Busca por defecto todos los *.spec.ts, *.test.ts, o archivos en carpetas __tests__.

Si queres personalizar isto, deberás usar testMatch ou testRegex.

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