import { Request, Response } from "express"
import { AppError } from "@/utils/AppError"
import { compare } from "bcrypt"
import { prisma } from "@/database/prisma"
import { z } from "zod"

class SessionsController {
 async create(request: Request, response: Response) {
    const bodySchema = z.object({
      email: z.string().email(),
      password: z.string().min(6),
    })

    const { email, password } = bodySchema.parse(request.body)

    const user = await prisma.user.findFirst({
      where: { email },
    })

    if(!user) {
      throw new AppError("E-mail ou senha inválidos.", 401)
    }

    const passwordMatched = await compare(password, user.password)

    if(!passwordMatched) {
      throw new AppError("E-mail ou senha inválidos.", 401)
    }

    return response.json({ message: "ok"})
  }  
}

export { SessionsController }