import { PrismaClient } from '@prisma/client';

// Add this to make TypeScript happy with the globalThis property
declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

// Use existing client if available to prevent multiple instances during development
export const db = global.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') {
  global.prisma = db;
}
