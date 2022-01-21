import express, { Request, Response } from 'express'
import { join } from 'path';
import { ApolloServer } from 'apollo-server-express'
import { schema, resolvers, context } from './graphql'

const app = express()
app.get('/', (req: Request, res: Response) => res.redirect('/transaction'));

const clientDir = join(__dirname, '../../client/dist');
app.use(express.static(clientDir));

// adds a simple get route 
app.use('/transaction', (req: Request, res: Response) => res.sendFile(`${clientDir}/index.html`));


const server = new ApolloServer({
  resolvers: resolvers,
  typeDefs: schema,
  context,
})
server.start().then(() => {
  server.applyMiddleware({ app })
})

const port = 4001
app.listen({ port }, () => {
  console.info(`🚀🚀 Server ready at http://localhost:${port}`)
})
