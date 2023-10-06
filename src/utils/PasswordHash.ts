// Not needed on code.
// Can be use bcrypt for hashing.
import { createHash } from 'crypto'

export async function CreateHash(hash: string) {
    const pwdHash = createHash('sha256').update(hash).digest('hex')

    return pwdHash;
}