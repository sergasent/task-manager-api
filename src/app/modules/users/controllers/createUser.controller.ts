import { FastifyRequest } from 'fastify';

export async function createUser(req: FastifyRequest) {
  console.log(req.body);
}
