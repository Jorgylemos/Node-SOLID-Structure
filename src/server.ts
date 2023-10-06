/** @Dependencies */
import { Server, createServer } from 'http'
import { server as ServerHost } from '../config.json'
import { app } from './app'

/** @Config to local server */
const port: number = Number(ServerHost.port)
const host: string = String(ServerHost.host)

try {
    const server: Server = createServer(app)
    /** @Open local server */
    server.listen(port, host, () => {
        if(server) {
            console.clear()
            console.log(`\x1b[35mConnected at port \x1b[33m${ServerHost.port} on ${ServerHost.host}\x1b[0m`)
        } else {
            new Error("There is no port or host")
            process.exit(0)
        }
    })
} catch (err) {
    if (err) throw new Error(String(ServerHost.error) + err)
}