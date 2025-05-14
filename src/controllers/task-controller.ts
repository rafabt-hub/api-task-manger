import { Request, Response } from "express"
import { prisma } from "@/database/prisma"
import { z } from "zod"

class TaskController {
  async create(request: Request, response: Response) {
    if (!request.user) {
      return response.status(401).json({ error: 'User not authenticated' });
    }
    const bodySchema = z.object({
      title: z.string(),
      description: z.string(),
      assignedTo: z.string().uuid().optional(),
      teamId: z.string().uuid(),
      status: z.enum(['pending', 'processing', 'completed']).optional(),
      priority: z.enum(['high', 'medium', 'low']).optional(),
    })

   const { title, description, assignedTo, teamId, status, priority } = bodySchema.parse(request.body);
   const userId = request.user.id; 

   const task = await prisma.task.create({
      data: {
        userId, 
        title,
        description,
        assignedTo: assignedTo || userId, 
        teamId,
        status: status || 'pending', 
        priority: priority || 'low', 
      },
    });

    return response.status(201).json(task);
  }

  async getAll(request: Request, response: Response) {
    const tasks = await prisma.task.findMany({
      include: {
        assignedUser: true,
        team: true,
      },
    });

    return response.json(tasks);
  }

  async getById(request: Request, response: Response) {
    const { id } = request.params;

    const task = await prisma.task.findUnique({
      where: { id },
      include: {
        assignedUser: true,
        team: true,
      },
    });

    if (!task) {
      return response.status(404).json({ error: "Task not found" });
    }

    return response.json(task);
  }

  async update(request: Request, response: Response) {
    const { id } = request.params;

    const bodySchema = z.object({
      title: z.string().optional(),
      description: z.string().optional(),
      assignedTo: z.string().uuid().optional(),
      status: z.enum(['pending', 'processing', 'completed']).optional(),
      priority: z.enum(['high', 'medium', 'low']).optional(),
    });

    const { title, description, assignedTo, status, priority } = bodySchema.parse(request.body);

    const task = await prisma.task.update({
      where: { id },
      data: {
        title,
        description,
        assignedTo,
        status,
        priority,
      },
    });

    return response.json(task);
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params;

    await prisma.task.delete({
      where: { id },
    });

    return response.status(204).json();
  }
}

export { TaskController }