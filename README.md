# clone-tabnews

Implementação do `https://www.tabnews.com.br/` pra treino em projetos pessoais.

## Example for run just a specific test inside folder

```JS
- yarn test:watch -- migrations.post
```

## Example for run just a specific test folder

```JS
- yarn test:watch -- migrations
```

## Acessos com CURL formatando JSON com Python

```JS
curl -s ...url/api/v1/status | python3 -m json.tool
```

## Acessos com CURL adicionando método

```JS
curl -s -X DELETE .../api/v1/migrations | python -m json.tool
```

## Acessos com CURL e formatando JSON com jq(já incluso em sistemas Linux, macOS e etc)

```JS
curl -s .../api/v1/status | jq
```
