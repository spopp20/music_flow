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



## Available Scripts

In the server directory, if not using docker-compose; you can run the following scripts

### npm run dev
runs the music server in development mode. Any server code change will cause the server to automatically restart and use the latest schema.

### npm run generate
Runs the schema.ts script and Nexus to generate your schema in two files

1. schema.graphql - generated with your servers Query objects
2. nexus-typegen.ts - auto-generated interface and type definitions

### npm run format
Use prettier to format js, JSON, typescript, and tsx files

### npm run build

1. operates prisma generate (See npm run generate)
2. generates schema.graphql
3. generates nexus-typegen.ts

### npm run start
Starts a non-debug music service GraphQL server

## Documentation

* [Nexus Documentation](https://nexusjs.org/docs/)
* [Apollo Server Documentation](https://www.apollographql.com/docs/apollo-server/)
* [Prisma](https://www.prisma.io/)
