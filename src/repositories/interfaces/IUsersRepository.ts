import { Prisma, User } from '@prisma/client'

export interface IUser {
    username: string;
    email: string;
    password: string;
}

export interface IUsersRepository {
    findById: (id: string) => Promise<User | null>;
    findByEmail: (email: string) => Promise<User | null>;
    create: (data: Prisma.UserCreateInput) => Promise<User>
}