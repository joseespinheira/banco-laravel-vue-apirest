# BANZE

## banco-laravel-vue-apirest
Um pequeno projeto para criar um sistema básico de banco ultilizando APIrest laravel e VueJS usando conceito de SPA(single page aplication).


Tecnologias Ultilizadas:
- Laravel API
- - Cors
- VueJS
- - Axios(não usado)

A aplicação tem autenticação JWT.

Funções disponiveis na API:
- Deposito
- Saque
- Saldo
- Cadastro de usuario
- login
- logoff

Como não há autenticação o usuário deve informar agencia e conta e valor para deposito ou saque.

A API se comunica através de JSON e esperar, caso haja, os dados vindo via Query.


# Tarefas
```
[ x ] Criar API
```
```
[  ] Criar Vue
```

# Subtarefas API
```
[ x ] Criar projeto laravel
```
```
[ x ] Configurar projeto
```
```
[ x ] Criar migrations
```
```
[ x ] Criar Model
```
```
[ x ] Criar Ends Points
```

# Subtarefas Vue
```
[ x ] Criar projeto VueJS
```
```
[ x ] Criar rotas
```
```
[ x ] Criar tela de deposito
```
```
[ x ] Criar tela de saque
```
```
[ x ] Criar tela de saldo
```
```
[  ] Criar tela de extrato (em breve)
```


# Resumo da experiência
Primeiro projeto que fiz ultilizando VueJS, mas como já estou estudando reactJS compensou um pouco o desenvolvimento, mas mesmo assim tive muita dificuldade para obter o conhecimento. A cada nova tela fui me abtuando e descobrindo como é o funcionamento do VueJS.

Sobre o laravel já o conhecia, pois já havia feito projetos MVC, mas fazer uma API foi uma grande nova experiência, já fiz API em PHP puro e em NodeJS, mas por ter contato anterior com Laravel foi muito facil e direto mesmo sabendo que ainda tenho muito a aprender.

Inicialmente a app não iria ter autenticação, porém quando olhamos para as funções de 'deposito', 'saque' e 'saldo' vemos a necessidade de uma autenticação para validar o usuario logado, consultar o saldo. A função de saque ficou aberta, mas sem um documento de regras ficou decidido o caminho mais curto e fácil.
