import {
  FastifyInstance,
  FastifyRequest,
  FastifyReply,
  RouteOptions,
} from 'fastify';

export class Router {
  private static instance: Router;

  private routes: RouteOptions[] = [];

  private constructor() {}

  public static getInstance() {
    if (!Router.instance) {
      Router.instance = new Router();
    }

    return Router.instance;
  }

  public get(
    path: string,
    handler: (request: FastifyRequest, reply: FastifyReply) => void,
  ) {
    this.routes.push({
      method: 'GET',
      url: path,
      handler,
    });
  }

  public post(
    path: string,
    handler: (request: FastifyRequest, reply: FastifyReply) => void,
  ) {
    this.routes.push({
      method: 'POST',
      url: path,
      handler,
    });
  }

  public put(
    path: string,
    handler: (request: FastifyRequest, reply: FastifyReply) => void,
  ) {
    this.routes.push({
      method: 'PUT',
      url: path,
      handler,
    });
  }

  public patch(
    path: string,
    handler: (request: FastifyRequest, reply: FastifyReply) => void,
  ) {
    this.routes.push({
      method: 'PATCH',
      url: path,
      handler,
    });
  }

  public delete(
    path: string,
    handler: (request: FastifyRequest, reply: FastifyReply) => void,
  ) {
    this.routes.push({
      method: 'DELETE',
      url: path,
      handler,
    });
  }

  public scan(server: FastifyInstance) {
    this.routes.forEach((route) => {
      server.route(route);
    });
  }

  public list() {
    return this.routes;
  }
}

const router = Router.getInstance();

export default router;
