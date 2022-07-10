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

### After editing prisma schema.prisma
Modify your database according to the schema.prisma file by executing

```
cd prisma
npx prisma migrate dev --name "reason for the change"
```

Runs prisma generate - to generate the PrismaClient in your node_modules folder
Also runs typescript-graphql to generate GraphQL Objects

### npm run generate (from the server folder)
Runs prisma generate - to generate the PrismaClient in your node_modules folder
Also runs typescript-graphql to generate GraphQL Objects

### npm run format
Use prettier to format js, JSON, typescript, and tsx files

### npm run start or npm run dev
Starts a non-debug music service GraphQL server
If not using docker-compose from the root folder, then set your DATABASE_URL environment variable first.

## Documentation

* [Apollo Server Documentation](https://www.apollographql.com/docs/apollo-server/)
* [Prisma](https://www.prisma.io/)
* [TypeGraphQL](https://typegraphql.com/)
