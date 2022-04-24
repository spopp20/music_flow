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


## Prisma DB Schema

Next steps:

1. Set the DATABASE_URL in the .env file to point to your existing database. If your database has no tables yet, read https://pris.ly/d/getting-started
2. Set the provider of the datasource block in schema.prisma to match your database: postgresql, mysql, sqlite, sqlserver or mongodb.
3. Run prisma db pull to turn your database schema into a Prisma schema.
4. Run prisma generate to generate the Prisma Client. You can then start querying your database.
```


### View Client App

```
docker-compose up
```
Open the link http://localhost:3000

### View Database Records

```


## client
Front-end application created using create-react-app

# server
Backend API service

# db
Database directory with sample.sql used to initialize the database

## Startup

```
docker-compose up
```

## Commands

            init   Setup Prisma for your app
      introspect   Get the datamodel of your database
        generate   Generate artifacts (e.g. Prisma Client)
          studio   Open Prisma Studio
          format   Format your schema
         migrate   Migrate your database
              db   Manage your database schema and lifecycle (Preview)

## Flags

     --preview-feature   Run Preview Prisma commands

## Examples

  Setup a new Prisma project
  $ npx prisma init

  Introspect an existing database
  $ npx prisma db pull

  Generate artifacts (e.g. Prisma Client)
  $ npx prisma generate

  Browse your data
  $ npx prisma studio

  Create migrations from your Prisma schema, apply them to the database, generate artifacts (e.g. Prisma Client)
  $ npx prisma migrate dev

  Push the Prisma schema state to the database
  $ npx prisma db push
