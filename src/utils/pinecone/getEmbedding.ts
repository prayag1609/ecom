import { OpenAI } from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export const getEmbedding = async (
  input: string
): Promise<number[]> => {
  const response = await openai.embeddings.create({
    model:'text-embedding-3-small',
    input,
    dimensions:1024
  });

  return response.data[0].embedding;
};

