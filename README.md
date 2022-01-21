# AirBank Transactions

## Getting Started

To get a copy of this project up and running on your local machine for testing and development, you would need to have a minimum of the listed prerequisites installed on your local machine.

### Prerequisites

You must have

1. [Node.js](https://nodejs.org/) (_v14.12.0 or higher_) and npm (_6.4.1 or higher_) installed on your local machine. Run `node -v` and `npm -v` in your terminal to confirm that you have them installed

2. GIT and Bash

### Installation

To get started, clone this repository on your local machine using the following steps:

Open your terminal and navigate to the folder you want the project to be and enter the the following commands:

```bash
git clone -b main https://github.com/addempsea/vue-apollo-graphql.git

cd vue-apollo-graphql
npm install
```

Create a `.env` file and add the environment variables described in the [.env.sample file](https://github.com/addempsea/vue-apollo-graphql.git/blob/main/.env.sample).

## Running migrations

```bash
npm run migrate
```

## Starting the dev server

```bash
npm run dev
```

## Technologies

- Node JS
- Express
- Postgres
- Typescript
- Prisma
- Vue
- Apollo
