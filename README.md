# music_flow

The start of a Docker supported client server database application

* Client - created with npx create-react-app (port 3000)
* Server - using apollo-server (port 4000)
* Note: Apollo server works great with the prisma libraries 
* I tried nexus-prisma (early preview) but it is not production ready yet
* I replaced nexus with typegraphql-prisma
* I will remove the generated code after updating the README.md


## Goal

Build a React full-stack application with Node.js on the front and back-end service with MariaDb as the application database


## Using
* Ubuntu 20.04.3 LTS
* nvm version 0.38.0
* nodejs version 16.14.2
* Docker version 20.10.12
* docker-compose version 1.29.2

## Root Folder
The root of this project contains the docker-compose.yaml file used to create the containers that compose this application.

* mysql-db - the application database
* mysql-seeder - seeds the database with temporary data 
* server - The application API services
* client - The Music Flow web application

## Run once

```
docker-compose pull
docker-compose build
```

### Application Startup

From the Root folder run the command:

```
docker-compose up
```

## Docker commands
| Command | Purpose |
| docker ps | List running containers |
| docker stop (conntainerId) | Stop identified container |


## Client Folder
Front-end application created using create-react-app

## Server Folder
Backend GraphQL API service

## Db Folder
Database directory with sample.sql used to initialize the database



## Prisma DB Schema

Prisma 2.0 is a system to manage your database schema versions.
It also generates a type safe ORM - the PrismaClient to provide access to the data.

Next steps from the server folder

```
1. Copy the .env.example file to create a .env file
2. Edit the DATABASE_URL in the .env file to point to your existing database. If your database has no tables yet, read https://pris.ly/d/getting-started
3. Set the provider of the datasource block in schema.prisma to match your database: postgresql, mysql, sqlite, sqlserver or mongodb.

```


### Start from an Existing Database Schema
Our project started with an existing schema loaded from db/sample.sql

In the server folder

```
3. Run `npx prisma db pull` to turn your database schema into a Prisma schema.
4. Run `npx prisma generate` to generate the Prisma Client. You can then start querying your database.
```

### To Change the Database Schema (Optional)
To change the Database schema or start from an edited prisma.schema file use the migrate command.
This will generate the schema and store the changes (migration) in the database and generate the Prisma Client

In the server folder (for development environments)

```
run `npx prisma migrate dev --name "(reason for the change)"`
```

To update the db/sample.sql - schema dump

```
# from the root folder of this project
cd db
mysqldump -u music -p music_program > sample.db
```

## View Client App

```
docker-compose up
```
Open http://localhost:3000

## View Database Records

The GraphQL server is running at http://localhost:4000

or

```
cd server
npx prisma studio

Environment variables loaded from .env
Prisma schema loaded from prisma/schema.prisma
Prisma Studio is up on http://localhost:5555
```

Open http://localhost:5555

## Prisma Commands

            init   Setup Prisma for your app
        generate   Generate artifacts (e.g. Prisma Client)
          studio   Open Prisma Studio
          format   Format your schema
         migrate   Migrate your database
              db   Manage your database schema and lifecycle


### Prisma Example Commands

```
  Setup a new Prisma project
  $ npx prisma init

  Introspect an existing database
  $ npx prisma db pull - updates prisma/schema.prisma

  Generate Prisma Client
  $ npx prisma generate

  Browse your data
  $ npx prisma studio

  Create migrations from your Prisma schema, apply them to the database, generate Prisma Client
  $ npx prisma migrate dev

  Push the Prisma schema state to the database
  $ npx prisma db push
```

After any change to the database/prisma schema rebuild your docker containers.
