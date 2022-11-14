# Boas-vindas ao repositório do projeto App de Receitas!

Para realizar o projeto, atente-se a cada passo descrito a seguir. Se tiver qualquer dúvida, nos envie por _Slack_! #vqv 🚀

### Habilidades que precisei utilizar nesse projeto:

  - Utilizar a Context API do _React_ para gerenciar estado
  - Utilizar o _React Hook useState_
  - Utilizar o _React Hook useContext_
  - Utilizar o _React Hook useEffect_
  - Criar Hooks customizados

### TheMealDB API

O [TheMealDB](https://www.themealdb.com/) é um banco de dados aberto, mantido pela comunidade, com receitas e ingredientes de todo o mundo.

Os end-points são bastante ricos, você pode [vê-los aqui](https://www.themealdb.com/api.php)
     
  
### The CockTailDB API

Bem similar (inclusive mantida pela mesma entidade) a TheMealDB API, só que focado em bebidas.

Os end-points também são bastante ricos, você pode [vê-los aqui](https://www.thecocktaildb.com/api.php)

As respostas seguem a mesma estrutura, com algumas particularidades relativas às bebidas (como ser ou não alcoólica, por exemplo)

### Rotas

As rotas a serem utilizadas na aplicação devem ser as seguintes:

* Tela de login: `/`;
* Tela principal de receitas de comidas: `/meals`;
* Tela principal de receitas de bebidas: `/drinks`;
* Tela de detalhes de uma receita de comida: `/meals/{id-da-receita}`;
* Tela de detalhes de uma receita de bebida: `/drinks/{id-da-receita}`;
* Tela de receita em progresso de comida: `/meals/{id-da-receita}/in-progress`;
* Tela de receita em progresso de bebida: `/drinks/{id-da-receita}/in-progress`;
* Tela de perfil: `/profile`;
* Tela de receitas feitas: `/done-recipes`;
* Tela de receitas favoritas: `/favorite-recipes`.

### Participantes

Esse projeto foi realizado em grupo, e os participantes podem ser vistos na aba de colaboradores desse repositório. Onde esses grandes amigos que me ajudaram são:

Gustavo, Thiago, João e Edson
