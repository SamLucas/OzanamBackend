import { Router } from "express";

import ResidentesController from "@/controllers/ResidentesControllers";
import QuartoControllers from "@/controllers/QuartoControllers";
import FunctionarioController from "@/controllers/FunctionarioController";
import HorarioMedicacoesController from "@/controllers/HorarioMedicacoesController";

const routes = Router();

routes.get("/residentes", ResidentesController.index);
routes.post("/residentes", ResidentesController.store);

routes.get("/bedrooms", QuartoControllers.index);
routes.post("/bedrooms", QuartoControllers.store);

routes.post("/functionary", FunctionarioController.store);
routes.get("/functionary", FunctionarioController.index);

routes.post("/medication_time", HorarioMedicacoesController.store);

export default routes;
