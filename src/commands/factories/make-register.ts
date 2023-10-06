import { RegisterCommand } from '../register.command'
import { PrismaUsersRepository } from '../../repositories/prisma/prisma-users-repository'

export function makeRegisterCommand() {
    const userRepository = new PrismaUsersRepository()
    const registerCommand = new RegisterCommand(userRepository)

    return registerCommand;
}