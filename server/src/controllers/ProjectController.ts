import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getProjects = async (req: Request, res: Response): Promise<void> => {
    try {
        const project = await prisma.project.findMany();
        res.status(200).json(project);
    } catch (error) {
        res.status(500).json({ error: "Error retrieving projects" });
    }   
}

export const createProject = async (req: Request, res: Response): Promise<void> => {
    const { name, description, startDate, endDate } = req.body;

    try { 
        const newProject = await prisma.project.create({
            data: {
                name,
                description,
                startDate,
                endDate
            }
        });
        res.status(201).json(newProject);
    } catch (error: any) {
        res.status(500).json({ error: `Error creating projects ${error.message}` });
    }   
}