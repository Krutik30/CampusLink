import { PrismaClient } from '@prisma/client';
// @ts-ignore
import faker from 'faker';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function seedDatabase() {
    try {

        const roles = await prisma.role.findMany();

        const users: any = [];
        for (let i = 0; i < 10; i++) {
            const email = faker.internet.email();
            const name = faker.name.findName();
            const password = await bcrypt.hash(faker.internet.password(), 10);
            const randomRoleId = Math.floor(Math.random() * roles.length);
            const roleId = roles[randomRoleId].roleId; 
            
            // Create user
            // const user = await prisma.users.create({
            //     data: {
            //         email,
            //         name,
            //         password,
            //     },
            // });

            // Create user details (student or faculty)
            const userDetailsData = {
                batch: faker.datatype.number({ min: 2018, max: 2022 }),
                position: faker.name.jobTitle(),
                department: faker.commerce.department(),
                contact_number: faker.phone.phoneNumber(),
                enrollmentNumber: BigInt(faker.datatype.number({ min: 200000000000, max: 299999999999 })),
                roleId,
            };

            const userObj = await prisma.users.create({
                data: {
                    email,
                    name,
                    password,
                    userDetails: {
                        create: userDetailsData,
                    }
                }
            })
            // const userObj = await prisma.userDetails.create({
            //     data: userDetailsData,
            // });
            users.push(userObj);
        }

        // Generate and save team data
        const teams: any = [];
        for (let i = 0; i < faker.random.number({ min: 10, max: 50 }); i++) {
            const teamName = faker.company.companyName();
            // const teamManagement: any = [];
            // for( let j = 0; j < users.length; j++){
            //     teamManagement.push({
            //         userDetailId: users[faker.random.number({ min: 0, max: users.length - 1 })].userId, // Randomly select a user ID from the users array
            //         teamName: faker.company.companyName(),
            //         leader: faker.datatype.boolean(),
            //     })
            // }
            const team = await prisma.team.create({ 
                data: {
                    name: teamName,
                    teamSize: faker.random.number({ min: 1, max: 5 }), 
                    teamSlogan: faker.company.catchPhrase(),
                    teamDescription: faker.company.bs(),
                    teamLogo: faker.image.imageUrl(),
                    teamStatus: 'Active',
                },
            });
            for( let j = 0; j < team.teamSize; j++){
                await prisma.teamManagement.create({
                    data: {
                        userDetailId: users[faker.random.number({ min: 0, max: users.length - 1 }).unique()].userId, // Randomly select a user ID from the users array
                        teamName: teamName,
                        leader: true,
                    }
                })
            }
            teams.push(team);
        }

        // Generate and save event data
        // const events: any = [];
        // for (let i = 0; i < 10; i++) {
        //     const teamIds: any = []; // Initialize an empty array to hold the team IDs for this event
        //     const numTeams = faker.random.number({ min: 1, max: 5 }); // Randomly choose the number of teams for this event (between 1 and 5 in this example)

        //     // Randomly select team IDs and add them to the array
        //     for (let j = 0; j < numTeams; j++) {
        //         const randomIndex = faker.random.number({ min: 0, max: teams.length - 1 }); // Randomly choose an index from the teams array
        //         teamIds.push(teams[randomIndex].teamId); // Add the selected team ID to the array
        //     }

        //     const eventData = {
        //         name: faker.lorem.words(3),
        //         description: faker.lorem.sentences(3),
        //         startDate: faker.date.between(new Date(), new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)), // Within the next 7 days
        //         endDate: faker.date.between(new Date(), new Date(Date.now() + 14 * 24 * 60 * 60 * 1000)), // Within the next 14 days
        //         organizer: faker.name.findName(),
        //         status: 'Active',
        //         managerId: i + 1,
        //         teamIds: teamIds, // Assign the array of team IDs to the teamIds field
        //     };
        //     const event = await prisma.event.create({ data: eventData });
        //     events.push(event);
        // }



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
