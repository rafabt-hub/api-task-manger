import { Request, Response } from "express"

class TaskController {
  create(request: Request, response: Response) {
    return response.json({ message: "ok" })
  }
}

export { TaskController }