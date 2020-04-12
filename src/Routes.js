import { Router } from "express";

import ResidentesController from "@/controllers/ResidentesControllers";
import QuartoControllers from "@/controllers/QuartoControllers";
import FunctionarioController from "@/controllers/FunctionarioController";
import HorarioMedicacoesController from "@/controllers/HorarioMedicacoesController";
import RemediosControllers from "@/controllers/RemediosControllers";

const routes = Router();

routes.get("/residentes", ResidentesController.index);
routes.post("/residentes", ResidentesController.store);

routes.get("/quartos", QuartoControllers.index);
routes.post("/quartos", QuartoControllers.store);

routes.post("/funcionarios", FunctionarioController.store);
routes.get("/funcionarios", FunctionarioController.index);

routes.post("/medication_time", HorarioMedicacoesController.store);

routes.post("/remedios", RemediosControllers.store);
routes.get("/remedios", RemediosControllers.index);

export default routes;
