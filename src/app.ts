import express, { Express } from 'express'
import cors from 'cors'

import { UserRoutes } from './http/routes/user.route'

const app: Express = express()

app.use(express.urlencoded({ extended: true })) // Parse urlencoded body in request;
app.use(express.json()) // Parse json body in request;
app.use(cors()) // Unlock cross domain requests;
app.use(UserRoutes)

export { app }
