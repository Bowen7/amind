import { PGliteWorker } from '@electric-sql/pglite/worker'

export const db = new PGliteWorker(
  new Worker(new URL('./worker.js', import.meta.url), {
    type: 'module',
  }),
)

// class
