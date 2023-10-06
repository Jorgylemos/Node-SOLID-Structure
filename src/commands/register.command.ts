import { IUsersRepository } from '../repositories/interfaces/IUsersRepository'
import { UserAlreadyExistsError } from './errors/user-already-exists-error'
import { hash } from 'bcrypt'
import { IRegisterRequest, IRegisterResponse } from '../commands/dto/RegisterDTO'


export class RegisterCommand {
    constructor(
        private usersRepository: IUsersRepository
    ) { }

    async execute({
        username,
        email,
        password
    }: IRegisterRequest): Promise<IRegisterResponse> {

        const password_hash = await hash(password, 6)

        const emailAlreadyExists = await this.usersRepository.findByEmail(email)

        if (emailAlreadyExists) {
            throw new UserAlreadyExistsError()
        }

        const user = await this.usersRepository.create({
            username,
            email,
            password_hash,
        })

        return { user }
    }
}