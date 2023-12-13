import { FastifyReply, FastifyRequest } from 'fastify';

export function listUsers(req: FastifyRequest, res: FastifyReply) {
  const { query } = req;
  res.send(query);
}
