import { PrismaClient } from '@prisma/client';
// @ts-ignore
import faker from 'faker';

const prisma = new PrismaClient();

async function seedDatabase() {
    try {
        // Generate roles
        const roles = ['Student', 'Faculty'];
        const createdRoles: any = await prisma.role.createMany({
            data: roles.map(name => ({ name })),
            skipDuplicates: true,
        });

        // Generate Courses

        const courses: any = [];
        for (let i = 0; i < 10; i++) {
            const name = faker.lorem.words(2);
            const code = faker.random.alphaNumeric(6).toUpperCase();
            const credits = faker.random.number({ min: 1, max: 5 });
            const semester = faker.random.number({ min: 1, max: 8 });
            const department = faker.lorem.word();

            courses.push({
                name,
                code,
                credits,
                semester,
                department
            });
        }

        // Create courses using Prisma
        await prisma.course.createMany({
            data: courses,
        });

        console.log('Courses seeded successfully');



        console.log('Seed data created successfully');
    } catch (error) {
        console.error('Error seeding database:', error);
        // @ts-ignore
        process.exit(1);
    } finally {
        await prisma.$disconnect();
    }
}

seedDatabase();
