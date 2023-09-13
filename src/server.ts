import { fastify } from 'fastify'
import { getAllPrompsRoute } from './routes/get-all-prompts'

export const app = fastify()

app.register(getAllPrompsRoute)

app.listen({
  port: 3333,  
}).then(() => {
  console.log('HTTP Server Running!')
})
