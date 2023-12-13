import Fastify from 'fastify';
import multipart from '@fastify/multipart';
import router from 'core/router';
import { MAX_FILE_SIZE } from '@config/config';

export default async function startServer() {
  const server = Fastify({
    logger: true,
  });

  server.register(multipart, {
    attachFieldsToBody: true,
    limits: {
      fileSize: MAX_FILE_SIZE,
    },
  });

  router.scan(server);

  try {
    await server.listen({ port: 3000 });
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
}
