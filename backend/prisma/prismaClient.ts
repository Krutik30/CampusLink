import { PrismaClient } from '@prisma/client';

export const prismaClient = new PrismaClient({
    log: [
        {
            emit: 'event',
            level: 'query',
        },
    ],
});

prismaClient.$on('query', (event) => {
    console.log('Query:', event.query);
});
