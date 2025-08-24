# Frontend Mentor - Solução para Formulário de contato

Essa é uma solução para [Contact form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/contact-form--G-hYlqKJj).

- [**Resumo**](#resumo) - visão geral do projeto
  - [O Desafio](#o-desafio) - objetivos do formulário
  - [Vídeo](#vídeo) - demonstração do formulário funcionando
- [**Meu processo**](#meu-processo) - como desenvolvi o projeto
  - [Feito com](#feito-com) -tecnologias e bibliotecas usadas
  - [O que aprendi?](#o-que-aprendi) - principais aprendizados e desafios
  - [Continuar em Desenvolvimento](#continuar-em-desenvolvimento) - metas de melhorias futuras
- [**Autor**](#autor) - link dos meus perfis


## 📝 Resumo 

&nbsp;&nbsp;&nbsp;O objetivo do projeto é a criação de um formulário funcional, acessível e responsivo, com validação de campos, mensagens de erros e confirmação visual de seu envio.

## 🎯 O Desafio 

O projeto foca em:

- Completar o formulário e visualizar uma mensagem de sucesso quando o envio for sucedido
- Mostrar mensagens de validação do formulário se:
  - Um campo obrigatório estiver faltando
  - O campo de email não tiver sido formatado corretamente
- Completar o formulário usando apenas o teclado
- Apresentar inputs, mensagens de erro, e mensagem de sucesso anunciada no screen reader
- Mostrar o layout otimizado dependendo da tamanho de tela do dispositivo
- Ver estados de hover e focus em todos os elementos interativos da tela

## 🎥 Vídeo 

[![Formulário Funcionando](./public/Contact%20Us%20-%20thumbnail.png)](https://youtu.be/EEfzHXOkUDc)

## ⚙️ Meu Processo 

&nbsp;&nbsp;&nbsp;Para realizar o projeto, criei-o com o uso do create-react-app. Usei o React para criar componentes de inputs personalizados e a biblioteca react-hook-form para facilitar o controle do formulário e suas funcionalidades. Durante a realização do desafio, consegui aprender um pouco mais sobre como estilizar inputs de tipo radio e checkbox sem perder a acessibilidade pelo screen reader. Além disso, tive que descobrir como usar as refs do React com as refs do RHF para conseguir adicionar a navegação pelo teclado nesses mesmos tipos de inputs. Já tenho uma certa intimidade com css, mas essa desafio continuou sendo uma ótima oportunidade para praticar edições em designs de cenários reais.

## 🛠️ Feito com 

- [React](https://reactjs.org/) - Biblioteca JS
- [Framer Motion](https://www.npmjs.com/package/framer-motion) - Animações para componentes React
- [Classnames](https://www.npmjs.com/package/classnames) - Manipulação condicional de classes CSS
- [React Hook Form](https://react-hook-form.com/) - Gerenciamento de formulários e validação
- CSS3 | Flexbox | Grid - layout e estilização responsiva
- Desktop-first workflow

## 📚 O que aprendi? 

- Como fazer validação com formulários React, utilizando o react-hook-form
- Como usar o react-hook-form junto a componentes de inputs estilizados
- Gerenciar os inputs, mensagens de erro e estado de "enviando" do formulário com o react-hook-form
- Estilização responsiva com o uso de Grid e Flexbox

## 🚀 Continuar em desenvolvimento 

&nbsp;&nbsp;&nbsp;Gostaria de continuar melhorando a minha estilização no quesito acessibilidade, visto que tanto estilizar os inputs que precisam de estilização desde o zero (radio e checkbox) e adicionar novamente seus requisitos acessíveis foi um desafio em que fiquei presa por um bom tempo.

## 👩‍💻 Autor 

- GitHub - [Taís Souza](https://github.com/tat4Souza)
- Frontend Mentor - [@tat4Souza](https://www.frontendmentor.io/profile/tat4Souza)
- Linkedin - [Taís Souza](https://www.linkedin.com/in/tais-f-souza/)
