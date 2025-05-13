import { Router } from "express"

import { taskRoutes } from "./task-route"
import { usersRoutes } from "./users-routes"
import { sessionsRoutes } from "./sessions-route"

const routes = Router()
routes.use("/users", usersRoutes)
routes.use("/sessions", sessionsRoutes)
routes.use("/task", taskRoutes)

export { routes }