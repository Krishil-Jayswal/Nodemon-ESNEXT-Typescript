import { Request, Response } from "express";

const homeController = (req: Request, res: Response) => {
  res.send("Welcome to Express");
  return;
};

export default homeController;
