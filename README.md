# music_flow

The start of a Docker supported client server database application

* Client - created with npx create-react-app
* Server - using apollo-server

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
3. Run `npx prisma db pull` to turn your database schema into a Prisma schema.
4. Run `prisma generate` to generate the Prisma Client. You can then start queryinnpx g your database.
```


## View Client App

```
docker-compose up
```
Open http://localhost:3000

## View Database Records

```
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