# Relatório Técnico: Desenvolvimento do Catálogo de Produtos Front-end

Este documento sumariza os aspectos técnicos desenvolvidos para o projeto **Catálogo de Equipamentos - Drangleic** (Dark Souls II), estruturado em React com Vite. A arquitetura foi focada em separação de responsabilidades (Componentização), manipulação de estado, renderização condicional e estilização responsiva.

## 1. Arquitetura e Componentização (React)
A aplicação foi desenvolvida baseada na criação de componentes funcionais fáceis de manter e reutilizar, alocados no diretório de `features/catalog/`. 

*   **`CatalogPage.jsx`**: Atuou como o componente "Pai" (*Smart Component*) responsável por armazenar a lista matriz de produtos. Este componente detém a centralização dos estados globais da tela.
*   **`CategoriesNav.jsx`**: Componente de apresentação das categorias. Processa dinamicamente a barra de navegação baseada nas categorias únicas lidas da fonte de dados, permitindo escalabilidade automática caso novas expansões surjam.
*   **`SearchBar.jsx`**: Input isolado que delega a atualização de estado do termo pesquisado diretamente para o componente Pai através de callbacks.
*   **`ProductList.jsx` e `ProductCard.jsx`**: Responsáveis pela renderização em árvore. O componente *List* lida apenas com a iteração (`.map`) repassando individualmente os dados base para a emissão de cada *Card*, evitando dependências rígidas na interface.

## 2. Gerenciamento de Estado e Lógica de Filtragem
A manipulação dos dados visíveis para o usuário foi feita diretamente sob a imutabilidade do React utilizando `useState`:

*   Foram definidos dois estados principais em memória fluída: **Termo de Busca** (Texto livre) e **Categoria Selecionada**.
*   A lógica de filtragem foi arquitetada em uma função combinada de complexidade linear, realizando duas verificações lógicas simultâneas (`matchCategory` && `matchSearch`), onde o seletor universal *"Todas"* ignora a restrição técnica.
*   A formação do vetor de exibição dos Pills da Navbar foi realizada convertendo o vetor da base de dados em `Set`, para extração estrita em `O(N)` apenas dos módulos categóricos exclusivos.

## 3. Estilização e UI/UX (React-Bootstrap & CSS Vanilla)
A aplicação fez uso da biblioteca *React-Bootstrap* para acelerar o desenvolvimento Grid, enquanto utilizou CSS Vanilla puro (`index.css`) para garantir a temática robusta.

*   **Sistema de Grid**: Total refatoração de listas brutas para componentes virtuais `Container`, `Row` e `Col`, transformando a lista de produtos em um esqueleto adaptativo a dispositivos *Mobile*, *Tablets* ou *Desktops*.
*   **Aparência Temática**: Uma folha de estilo modificou o `<body/>` para carregar um background estático desfocado (*Blur*). Para garantir legibilidade sobre fundos escuros, os cartões de produtos receberam *background colors* semitransparentes em formatação `rgba(20, 20, 20, 0.70)`.
*   **Responsividade do Menu**: A classe utilitária do flexbox `flex-wrap` foi injetada no Container de navegação para que as 27 categorias comportem transbordos contínuos de linha em aparelhos móveis sem estourar o eixo horizontal.
*   **Formatação Dinâmica de Preço**: O componente do cartão lidou com floats cruamente, e utilizou embutido `Intl.NumberFormat('pt-BR')` para exibição fiel no formato moeda financeira.

## 4. Gerenciamento de Assets, Dados e Metadados
*   **Base de Dados NoSQL Local (`products.json`)**: Popularização da aplicação usando persistência injetada, totalizando **252 itens únicos**. Todos foram indexados estritamente sob as diretrizes cruzadas exatas advindas da Wiki original.
*   **Tratamento de Arquivos Locais**: Todo o diretório de assets originário (`/src/assets/images/`) passou por higienização massiva retirando codificações HTML das URIs (Ex: Corrigindo `%27` de volta para apostrofe), assegurando o link fluído pelo parser HTTP da interface.
*   **Favicons e Manifestos**: Substituição do favicon placeholder comum para diretório raiz `public/`, injetando artefatos apropriados (`apple-touch`, `site.webmanifest`, ícones base), habilitando suporte unificado cruzado e título polido pelo Webpack/Rollup subjacente do Vite.
