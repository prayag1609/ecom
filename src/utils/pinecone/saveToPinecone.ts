import { index } from './pinecone';

export const saveToPinecone = async (
  {
    id,
    values,
    metadata,
  }: {
    id: string;
    values: number[];
    metadata: Record<string, string>;
  }) => {
  await index.upsert([
    {
      id,
      values,
      metadata,
    },
  ]);
};
