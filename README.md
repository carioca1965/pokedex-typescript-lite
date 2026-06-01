
# 🎮 Pokédex TypeScript Lite

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge\&logo=typescript\&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge\&logo=nodedotjs\&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge\&logo=git\&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge\&logo=github\&logoColor=white)
![PokeAPI](https://img.shields.io/badge/PokeAPI-FFCB05?style=for-the-badge)

---

## 📖 Sobre o Projeto

O **Pokédex TypeScript Lite** é uma aplicação desenvolvida em **Node.js + TypeScript** que realiza consultas na **PokeAPI** e organiza Pokémon em um catálogo local.

Projeto desenvolvido para praticar:

* ✅ TypeScript
* ✅ Programação Orientada a Objetos
* ✅ Consumo de API REST
* ✅ Async/Await
* ✅ Tratamento de Erros
* ✅ Git e GitFlow

---

## 🎯 Objetivo

Construir uma aplicação back-end capaz de:

* 🔍 Buscar Pokémon por nome ou ID
* 📡 Consumir dados da PokeAPI
* 📦 Armazenar Pokémon em um catálogo local
* 🚫 Evitar duplicidades
* 📋 Listar Pokémon cadastrados
* 🗑️ Remover Pokémon por ID

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Uso                              |
| ---------- | -------------------------------- |
| Node.js    | Ambiente de execução             |
| TypeScript | Linguagem principal              |
| TSX        | Execução dos arquivos TypeScript |
| PokeAPI    | API externa                      |
| Git        | Controle de versão               |
| GitHub     | Hospedagem do projeto            |

---

## 📂 Estrutura do Projeto

```text
pokedex-typescript-lite/

├── src/
│   ├── controllers/
│   ├── models/
│   ├── services/
│   ├── utils/
│   └── main.ts
│
├── pc_box.json
├── package.json
├── tsconfig.json
├── README.md
└── .gitignore
```

---

## ⚙️ Instalação

### 1️⃣ Clonar o repositório

```bash
git clone git@github.com:carioca1965/pokedex-typescript-lite.git
```

### 2️⃣ Entrar na pasta

```bash
cd pokedex-typescript-lite
```

### 3️⃣ Instalar dependências

```bash
npm install
```

---

## ▶️ Executando o Projeto

### Ambiente de Desenvolvimento

```bash
npm run dev
```

### Compilar o Projeto

```bash
npm run build
```

### Executar

```bash
npm run start
```

---

## 🚀 Funcionalidades

### 🔍 Buscar Pokémon

Consulta Pokémon diretamente na PokeAPI.

### 📥 Adicionar ao Catálogo

Armazena Pokémon encontrados.

### 🚫 Evitar Duplicidade

Não permite cadastrar Pokémon repetidos.

### 📋 Listar Catálogo

Exibe todos os Pokémon cadastrados.

### 🗑️ Remover Pokémon

Remove Pokémon pelo ID.

### ⚠️ Tratamento de Erros

Evita falhas quando um Pokémon não existe.

---

## 📚 Conceitos Aplicados

### Interfaces

* PokemonResumo
* PokemonApiResponse

### Classe

* CatalogoPokemon

### Métodos de Array

* map() → transforma os tipos retornados pela API.
* some() → verifica duplicidade.
* filter() → remove Pokémon.
* forEach() → lista Pokémon cadastrados.

### Async/Await

Utilizado para realizar chamadas assíncronas à PokeAPI.

### Try/Catch

Responsável pelo tratamento de erros durante as consultas.

---

## 💻 Exemplos de Execução

### ✅ Busca Válida

**Entrada:**

```text
pikachu
```

**Saída:**

```text
[OK] pikachu adicionado ao catálogo.
#25 - pikachu | Tipos: electric | Altura: 4 | Peso: 60
```

### ❌ Busca Inválida

**Entrada:**

```text
pokemon-inexistente
```

**Saída:**

```text
[ERRO] Pokémon não encontrado: pokemon-inexistente
```

### ⚠️ Duplicidade

**Entrada:**

```text
adicionar pikachu duas vezes
```

**Saída:**

```text
[AVISO] pikachu já está no catálogo.
```

### 🗑️ Remoção

**Entrada:**

```text
remover ID 25
```

**Saída:**

```text
[OK] Pokémon removido do catálogo.
```

---

## 🌳 GitFlow

Branches utilizadas:

* main
* develop
* feat/pokedex
* docs/readme

---

## 📋 Organização do Kanban

Projeto organizado utilizando GitHub Projects.

Kanban:

https://github.com/users/carioca1965/projects/2

---

## 🔗 Repositório

[git@github.com](mailto:git@github.com):carioca1965/pokedex-typescript-lite.git

---

## 🔮 Melhorias Futuras

* ✨ Criar menu interativo
* ✨ Salvar catálogo em JSON
* ✨ Exibir HP, Ataque e Defesa
* ✨ Filtrar por tipo
* ✨ Criar API própria com Express

---

## 👨‍💻 Autor

**Carlos Eduardo Pereira Pedroza**

Projeto desenvolvido para fins acadêmicos.
