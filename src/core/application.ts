import Fastify from 'fastify';
import router from './router';

export default async function startApplication() {
  const server = Fastify({
    logger: true,
  });

  router.scan(server);
  try {
    await server.listen({ port: 3000 });
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
}
