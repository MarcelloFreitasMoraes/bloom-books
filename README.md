# Bloom Books 🚀

**Bloom Books** é uma aplicação construída com **Next.js 15** que exibe gêneros de livros e suas listas de livros em detalhes, utilizando **Server-Side Rendering (SSR)** para otimizar a experiência de carregamento e renderização das páginas.

A aplicação utiliza várias bibliotecas e tecnologias modernas, incluindo **Shadcn UI**, **Zustand**, **React Icons**, **TypeScript**, e **Tailwind CSS**.

## 📦 Tecnologias Utilizadas

- **Next.js 15** – Framework React para renderização do lado do servidor e construção de páginas dinâmicas.
- **Shadcn UI** – Biblioteca de componentes de interface do usuário altamente acessíveis e customizáveis.
- **Zustand** – Gerenciamento de estado leve e simples para React.
- **React Icons** – Conjunto de ícones SVG para facilitar o uso de ícones no projeto.
- **TypeScript** – Para garantir segurança de tipos durante o desenvolvimento.
- **Tailwind CSS** – Framework de CSS utilitário para estilização rápida e responsiva.

## Páginas

### 1. **Página de Gêneros de Livros**

A primeira página da aplicação exibe a lista de **gêneros de livros** obtidos de uma API externa. A API utilizada para essa funcionalidade é a seguinte:

- ## 🌐 API de Gêneros de Livros:
  - Endpoint: [NYT API - List of Books](https://api.nytimes.com/svc/books/v3/lists/names.json)
  - Esta API retorna uma lista de todos os gêneros de livros disponíveis.

### 2. **Página Interna de Gêneros**

Quando um gênero é selecionado na página inicial, o usuário é redirecionado para uma página que exibe uma lista de **livros relacionados ao gênero**. A API usada para essa funcionalidade é a seguinte:

- ## 🌐 API de Livros por Gênero:
  - Endpoint: [NYT API - Books by Genre](https://api.nytimes.com/svc/books/v3/lists.json)
  - Esta API retorna uma lista de livros em uma lista específica de gêneros, com detalhes como título, autor e descrição.

  - **Gerenciamento de Estado**:
   - Uso do **Zustand** para gerenciamento global de estado, facilitando a manutenção e comunicação entre componentes.

- **Responsividade**:
   - O layout é totalmente responsivo, adaptando-se a diferentes tamanhos de tela usando **Tailwind CSS**.

## Instalação

Para rodar o projeto localmente, siga as instruções abaixo:

### 1. Clonar o Repositório

```bash
git clone https://github.com/MarcelloFreitasMoraes/bloom-books.git
```

## ⚙️ Como Rodar o Projeto

1. Clone este repositório:

```bash
git clone https://github.com/MarcelloFreitasMoraes/bloom-books.git
```

2. Acesse o diretório do projeto:

```bash
cd bloom-books
```

3. Instale as dependências:

```bash
npm install
```

4. Rode o projeto localmente: 

```bash
npm run dev
```

5.  Abra o navegador e acesse:  

```bash
http://localhost:3000/
```
