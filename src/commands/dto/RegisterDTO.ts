import { User } from '@prisma/client'

export interface IRegisterRequest {
    username: string;
    email: string;
    password: string;
}

export interface IRegisterResponse {
    user: User;
}