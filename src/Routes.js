import { Router } from "express";

import ResidentesController from "@/controllers/ResidentesControllers";

const routes = Router();

routes.get("/residentes", ResidentesController.index);
routes.post("/residentes", ResidentesController.store);

export default routes;
