import { Request, Response } from 'express'
import { makeRegisterCommand } from '../../../commands/factories/make-register'
import { UserAlreadyExistsError } from '../../../commands/errors/user-already-exists-error'
import { z } from 'zod'

export async function RegisterController(req: Request, res: Response) {
    const registerBodySchema = z.object({
        username: z.string(),
        email: z.string().email(),
        password: z.string().min(6),
    });

    const { username, email, password } = registerBodySchema.parse(req.body)

    console.log(username, email, password)

    try {
        const registerCommand = makeRegisterCommand()

        await registerCommand.execute({
            username,
            email,
            password
        })

    } catch (err) {

        if (err instanceof UserAlreadyExistsError) {
            return res.status(400).json({
                error: err.message || "Unexpected Error."
            });
        }

        throw err;
    }

    return res.status(201).send()
}