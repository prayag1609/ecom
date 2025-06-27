import { index } from './pinecone';
import { getEmbedding } from './getEmbedding';
import { PrismaClient } from '../../generated/prisma';
const prisma = new PrismaClient();

export const searchProduct = async (
  query: string
) => {
  const vector = await getEmbedding(query);
  const result = await index.query({
    vector,
    topK: 10, // mean to get top 10 results
    includeValues: false,
    includeMetadata: true,
  });

  const matches = result.matches || [];
  if (matches.length === 0) return [];
  const ids = matches.map(m => m.id);
  const products = await prisma.product.findMany({
    where: { id: { in: ids } },
    select: {
      id: true,
      name: true,
      description: true,
      category: true,
      price: true,
      // features: true,
      // quantity: true,
      // image: true,
    },
  });

  // Sort products by Pinecone similarity order
  const idOrderMap = matches.reduce((acc, cur, idx) => {
    acc[cur.id] = idx;
    return acc;
  }, {} as Record<string, number>);

  return products.sort((a: any, b: any) => idOrderMap[a.id] - idOrderMap[b.id]);
};
