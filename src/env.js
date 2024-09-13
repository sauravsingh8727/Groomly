import z from 'zod';
import { envalid } from './lib/envalid/index.js';

export const env = envalid({
  shared: {
    NODE_ENV: z.enum(['development', 'production', 'test']),
    PORT: z.string(),
  },
  // variables only exposed to client
  client: {},
  // variables only exposed to server
  server: {},
  // must specify all variables individually
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    PORT: process.env.PORT ?? '3000', // Next.JS build script dynamically adds the PORT env, so it needs a fallback value
  },
});
