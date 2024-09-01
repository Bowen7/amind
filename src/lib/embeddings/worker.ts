import { PGlite } from '@electric-sql/pglite'
import { worker } from '@electric-sql/pglite/worker'
import { vector } from '@electric-sql/pglite/vector'

const DATA_DIR = 'idb://amind/pglite'

worker({
  async init() {
    return new PGlite({
      dataDir: DATA_DIR,
      extensions: {
        vector,
      },
    })
  },
})
