import { Router } from "express"

import { TaskController } from "@/controllers/task-controller"

import { ensureAuthenticated } from "@/middlewares/ensure-authenticated"
import { verifyUserAuthorization } from "@/middlewares/verifyUserAuthorization"

const taskRoutes = Router()
const taskController = new TaskController()

taskRoutes.use(ensureAuthenticated, verifyUserAuthorization(["admin"]))
taskRoutes.post("/", taskController.create)

export { taskRoutes }