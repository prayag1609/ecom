"use strict";
// import { Pinecone } from '@pinecone-database/pinecone';
Object.defineProperty(exports, "__esModule", { value: true });
exports.index = void 0;
// const pinecone = new Pinecone({
//   apiKey: process.env.PINECONE_API_KEY!,
// });
// export const index = pinecone.index(process.env.PINECONE_INDEX_NAME!);
const pinecone_1 = require("@pinecone-database/pinecone");
const pinecone = new pinecone_1.Pinecone({
    apiKey: process.env.PINECONE_API_KEY,
});
exports.index = pinecone.index(process.env.PINECONE_INDEX_NAME);
