import { createHook, executionAsyncId } from 'async_hooks';
import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';

type NestMiddleware = (req: Request, res: Response, next: () => void) => void;

interface RequestContext {
  correlationId: string;
}

const store = new Map<number, RequestContext>();

export function SessionMiddleware(): NestMiddleware {
  const asyncHook = createHook({
    init(asyncId, _, triggerAsyncId) {
      if (store.has(triggerAsyncId)) {
        store.set(asyncId, store.get(triggerAsyncId));
      }
    },
    destroy(asyncId) {
      if (store.has(asyncId)) {
        store.delete(asyncId);
      }
    },
  });

  asyncHook.enable();

  return (req: Request, res: Response, next: () => void): void => {
    const correlationId = req.header('x-correlation-id') || uuidv4();

    res.set('x-correlation-id', correlationId);
    req.headers['x-correlation-id'] = correlationId;

    store.set(executionAsyncId(), { correlationId });

    next();
  };
}

export function getRequestContext(): RequestContext {
  return store.get(executionAsyncId());
}
