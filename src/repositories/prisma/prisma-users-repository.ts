import { Prisma, PrismaClient } from '@prisma/client'
import { IUsersRepository } from '../interfaces/IUsersRepository'

const prisma = new PrismaClient()

export class PrismaUsersRepository implements IUsersRepository {

    async findById(id: string) {
        const user = await prisma.user.findUnique({
            where: {
                id
            }
        })

        return user
    }

    async findByEmail(email: string) {
        const user = await prisma.user.findUnique({
            where: {
                email,
            }
        })

        return user
    }

    async create(data: Prisma.UserCreateInput) {
        const user = prisma.user.create({
            data
        })

        return user
    }
}