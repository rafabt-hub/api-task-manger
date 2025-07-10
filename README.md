# API - Task Manager 📝

![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)
![Tech](https://img.shields.io/badge/tech-Node.js%20%26%20Express-68A063?logo=node.js)

A RESTful API for a task management application, built with Node.js, Express, Prisma, and PostgreSQL. It allows creating, listing, updating, and deleting tasks.

## ✨ Features

-   **Create, Read, Update, Delete (CRUD)** operations for tasks.
-   **Mark a task as complete** with a dedicated `PATCH` endpoint.
-   **Search tasks** by title and description.
-   **CSV file import** to create tasks in bulk.
-   **Input validation** using Zod to ensure data integrity.

## 🛠️ Tech Stack

-   **Runtime:** [Node.js](https://nodejs.org/)
-   **Framework:** [Express.js](https://expressjs.com/pt-br/)
-   **Language:** [TypeScript](https://www.typescriptlang.org/)
-   **ORM:** [Prisma](https://www.prisma.io/)
-   **Database:** [PostgreSQL](https://www.postgresql.org/)
-   **Schema Validation:** [Zod](https://zod.dev/)

## 🚀 Getting Started

To run this project locally, you'll need Node.js, npm, and a running PostgreSQL instance.

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/rafabt-hub/api-task-manger.git
    ```
2.  **Navigate to the project directory:**
    ```sh
    cd api-task-manger
    ```
3.  **Install dependencies:**
    ```sh
    npm install
    ```
4.  **Set up environment variables:**
    Create a `.env` file in the root directory and add your database connection string. You can copy the example below:
    ```.env
    DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"
    ```
    *Replace `USER`, `PASSWORD`, `HOST`, `PORT`, and `DATABASE` with your PostgreSQL credentials.*

5.  **Run database migrations:**
    This will create the necessary tables in your database based on the Prisma schema.
    ```sh
    npx prisma migrate dev
    ```
6.  **Run the development server:**
    ```sh
    npm run dev
    ```
    The API will be available at `http://localhost:3000`.

## 🌐 API Endpoints

| Method | Endpoint                    | Description                     |
| :----- | :-------------------------- | :------------------------------ |
| `POST` | `/tasks`                    | Creates a new task.             |
| `GET`  | `/tasks`                    | Lists all tasks.                |
| `PUT`  | `/tasks/:id`                | Updates a task by its ID.       |
| `DELETE`| `/tasks/:id`                | Deletes a task by its ID.       |
| `PATCH`| `/tasks/:id/complete`       | Toggles a task's status.        |

## 📄 License

This project is licensed under the MIT License.

---

<details>
  <summary>🇧🇷 Ver em Português</summary>

  <br>

  > Uma API RESTful para uma aplicação de gerenciamento de tarefas, construída com Node.js, Express, Prisma e PostgreSQL. Permite criar, listar, atualizar e deletar tarefas.

  ### ✨ Funcionalidades

  -   Operações **CRUD** (Criar, Ler, Atualizar, Deletar) para tarefas.
  -   **Marcar tarefa como concluída** com um endpoint `PATCH` dedicado.
  -   **Busca de tarefas** por título e descrição.
  -   **Importação via arquivo CSV** para criar tarefas em massa.
  -   **Validação de entrada** com Zod para garantir a integridade dos dados.

  ### 🚀 Como Executar

  Para rodar este projeto, você precisará do Node.js, npm e uma instância do PostgreSQL ativa.

  1.  **Clone o repositório.**
  2.  **Navegue até a pasta do projeto.**
  3.  **Instale as dependências:** `npm install`.
  4.  **Configure as variáveis de ambiente:** Crie um arquivo `.env` na raiz e adicione sua string de conexão do banco de dados (veja o exemplo na seção em inglês).
  5.  **Execute as migrações do banco:** `npx prisma migrate dev`.
  6.  **Inicie o servidor:** `npm run dev`. A API estará rodando em `http://localhost:3000`.

</details>
