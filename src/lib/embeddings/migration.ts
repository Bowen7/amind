import type { PGliteInterface, PGliteOptions, PGliteWorker, Transaction } from '@electric-sql/pglite'
import { codeBlock } from 'common-tags'

type Migration = {
  version: string
  name?: string
  sql: string
}

const migrations: Migration[] = [
  {
    version: '202409010001',
    name: 'amind',
    sql: codeBlock`
      create extension if not exists vector;
    
      create schema if not exists amind;

      create table if not exists amind.embeddings (
        id bigint primary key generated always as identity,
        created_at timestamptz not null default now(),
        content text not null,
        embedding vector(384) not null
      );
    `,
  },
].sort()

export const migrate = async (db: PGliteWorker, migrations: Migration[]) => {
  await db.exec(codeBlock`
    create schema if not exists meta;

    create table if not exists meta.migrations (
      version text primary key,
      name text,
      applied_at timestamptz not null default now()
    );
  `)

  const { rows: appliedMigrations } = await db.query<{ version: string }>(
    'select version from meta.migrations order by version asc',
  )
}
