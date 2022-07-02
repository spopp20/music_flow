# Music Server
The music server provides an API for data persistance using a GraphQL API

Its purpose is to provide data to the Music Flow web application


## Usage


2. Install server dependencies

```
cd server
cp .env.example .env
npm install
cd ..
```


If you have Docker installed

```
docker-compose up
```

Open the GraphQL interface at [http://localhost:4000](http://localhost:4000)



## Available scripts from the server folder

In the server directory first copy the file named .env.example to a .env file.
Then you can run the server by running docker-compose up.

In running the server outside of docker - first set an environment variable:
DATABASE_URL with a similar value found in .env.example.

Then you can run the following scripts.

### npm run dev
runs the music server in development mode. Any server code change will cause the server to automatically restart and use the latest schema.


## Prisma

### Use Prisma to pull down an existing database schema

Note that many-to-many relations will not be detected unless tables are named a specific way.
See prisma documentation.

```
npx prisma db pull
```

### Validate a prisma schema

```
cd server/prisma

npx prisma validate
```


### npm run generate (from the server folder)
Runs the schema.ts script and Nexus to generate your schema in two files

1. schema.graphql - generated with your servers Query objects
2. nexus-typegen.ts - auto-generated interface and type definitions

### npm run format
Use prettier to format js, JSON, typescript, and tsx files

### npm run build (from the server folder)

1. operates prisma generate (See npm run generate)
2. generates schema.graphql
3. generates nexus-typegen.ts

### npm run start
Starts a non-debug music service GraphQL server
If not using docker-compose from the root folder, then set your DATABASE_URL environment variable first.

## Documentation

* [Nexus Documentation](https://nexusjs.org/docs/)
* [Apollo Server Documentation](https://www.apollographql.com/docs/apollo-server/)
* [Prisma](https://www.prisma.io/)
