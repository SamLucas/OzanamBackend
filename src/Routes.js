import { Router } from "express";

import ResidentesController from "@/controllers/ResidentesControllers";
import QuartoControllers from "@/controllers/QuartoControllers";
import FunctionarioController from "@/controllers/FunctionarioController";
import HorarioMedicacoesController from "@/controllers/HorarioMedicacoesController";
import RemediosInfoControllers from "@/controllers/RemediosInfoControllers";
import HorarioMedicacoesFuncionarioController from "@/controllers/HorarioMedicacoesFuncionarioController";

const routes = Router();

routes.get("/residentes", ResidentesController.index);
routes.post("/residentes", ResidentesController.store);

routes.get("/quartos", QuartoControllers.index);
routes.post("/quartos", QuartoControllers.store);

routes.post("/funcionarios", FunctionarioController.store);
routes.get("/funcionarios", FunctionarioController.index);

routes.post("/medication_time", HorarioMedicacoesController.store);

routes.post("/remedios/info", RemediosInfoControllers.store);
routes.get("/remedios/info", RemediosInfoControllers.index);

routes.post(
  "/medication_time/funcionario",
  HorarioMedicacoesFuncionarioController.store
);

export default routes;
