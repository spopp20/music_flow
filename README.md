# music_flow

The start of a Docker supported client server database application

* Client - created with npx create-react-app (port 3000)
* Server - using apollo-server and nexus (port 4000)
** Note: I am impressed with apollo-server and with the prisma libraries
** Note: Though I like the nexus 2.0 concept and the work that has been done
** The nexus 2.0 library (in beta) may be replaced in the future due to some duplicated effort in the work-flow.

## Goal

Build a React full-stack application with Node.js on the front and back-end service with MariaDb as the application database


## Using
* Ubuntu 20.04.3 LTS
* nvm version 0.38.0
* nodejs version 16.14.2
* Docker version 20.10.12
* docker-compose version 1.29.2


## client folder
Front-end application created using create-react-app

## server folder
Backend GraphQL API service

## db folder
Database directory with sample.sql used to initialize the database

## Application Startup

```
docker-compose up
```

## Prisma DB Schema

Next steps from the server folder

```
1. Set the DATABASE_URL in the .env file to point to your existing database. If your database has no tables yet, read https://pris.ly/d/getting-started
2. Set the provider of the datasource block in schema.prisma to match your database: postgresql, mysql, sqlite, sqlserver or mongodb.

```

### Start from an Existing Database Schema First
Our project started with an existing schema loaded from db/sample.sql

```
3. Run `npx prisma db pull` to turn your database schema into a Prisma schema.
4. Run `npx prisma generate` to generate the Prisma Client. You can then start querying your database.
```

### To Change the Database Schema (Optional)
To change the Database schema or start from an edited prisma.schema file use the migrate command.
This will generate the schema and store the changes (migration) in the database and generate the Prisma Client

```
run `npx prisma migrate dev --name "(reason for the change)"`
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
      introspect   Get the datamodel of your database
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