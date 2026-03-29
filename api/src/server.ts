import { fastifyCors } from '@fastify/cors'
import fastifySwagger from '@fastify/swagger'
import ScalarApiReference from '@scalar/fastify-api-reference'
import { fastify } from 'fastify'
import {
  jsonSchemaTransform,
  serializerCompiler,
  validatorCompiler,
  type ZodTypeProvider,
} from 'fastify-type-provider-zod'
import { listWebhooks } from './routes/list-webhooks'
import { env } from './env'
import { db } from './db'

db

const app = fastify().withTypeProvider<ZodTypeProvider>()

app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)

app.register(fastifyCors, {
  origin: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  credentials: true,
})

app.register(fastifySwagger, {
  openapi: {
    info: {
      title: 'Webhook Inspector API',
      description: 'API for capturing and inspecting webhook requests',
      version: '1.0.0',
    },
  },
  transform: jsonSchemaTransform,
})

app.get('/', { schema: { hide: true } }, async (req, rep) => {
  return rep.redirect('/docs')
})

app.register(ScalarApiReference, {
  routePrefix: '/docs',
})

app.register(listWebhooks)

app.listen({ port: env.PORT, host: '0.0.0.0' }).then(() => {
  console.log(`🔥 HTTP server running http://localhost:${env.PORT}`)
  console.log(`📚 Docks avaiable at http://localhost:${env.PORT}/docs`)
})
