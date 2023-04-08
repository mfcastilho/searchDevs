# searchDevs

Aplicação web em ReactJS que busca o perfil de desenvolvedores na API pública do GitHub e exibe os seus dados em uma página de perfil.


## O que faz a aplicação
> •	Pesquisa o username do perfil do GitHub e obtém os dados do usuário exibidos corretamente na página de perfil.  

> •	Na página de perfil, os repositórios são ordenados com o seguinte critério: dos que tem mais estrelas, para os que tem menos estrelas.  

> •	Os nomes dos repositórios são links que levam ao repositório original do GitHub, em uma página nova.  

> •	Caso o usuário pesquisado possua um site nas informações de seu perfil, o mesmo ao ser clicado, é aberto em uma nova página. O mesmo acontece caso o usuário pesquisado tenha uma conta no twitter em seu perfil.  

> •	O botão de voltar levar de volta para a home page, para que outro usuário do GitHub seja pesquisado.  


## APIs utilizadas no projeto

> •	API de busca de usuários do GitHub: https://api.github.com/users/username

> •	API de busca de repositórios do usuário pesquisado: https://api.github.com/users/username/repos

## Design do projeto

> •	Design de tela - página Home: https://marvelapp.com/prototype/9b662g7/screen/76185933/handoff

> •	Design de tela - página Perfil: https://marvelapp.com/prototype/9b662g7/screen/76186368/handoff


## O projeto

> •	Foi utilizado a library de ReactJS com function components

> •	Foi utilizado o vite para criar o projeto ReactJS

> •	Foi utilizado o CSS clássico 

> •	Para rotas foi utilizado a library react-router-dom, e foi usado a funcionalidade  navigate do react-router-dom 

> •	O projeto contem duas rotas: a rota “home” da página de busca, e a rota “perfil” que exibe o perfil do usuário pesquisado

> • Foi utilizado a library axios para fazer as requisições na API 

> • Foi utlizado a library momentJs para fazer a manipulação de datas e horas

> •	O responsivo – foi levado em 3 considerações: Notebook/Desktop (como um só, resoluções maiores que 1300px width), tablet iPad e celular iPhone 5 (o Chrome Dev Tools possui referência para todos estes dispositivos por padrão)


## Inicialização do projeto
> 1. npm install - instala as dependências
> 2. npm run dev - roda o projeto no ambiente de desenvolvimento
> 3. npm run build - cria versão otimizada do aplicativo


## Objetivos do projeto

A ideia deste projeto é entender os conceitos básicos de React, com um desafio no mundo real, da forma mais “sincera” possível. E, a partir dele, entender como trazer este conhecimento pra debate com outros profissionais e como apresentar uma solução técnica que traz valor para um cliente/usuário final num ambiente de trabalho. 

## Deploy do projeto 
> - Link: https://search-devs.netlify.app/


