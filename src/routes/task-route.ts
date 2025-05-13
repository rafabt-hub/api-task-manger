import { Router } from "express"

import { TaskController } from "@/controllers/task-controller"

import { ensureAuthenticated } from "@/middlewares/ensure-authenticated"

const taskRoutes = Router()
const taskController = new TaskController()

taskRoutes.use(ensureAuthenticated)
taskRoutes.post("/", taskController.create)

export { taskRoutes }