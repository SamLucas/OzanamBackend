import { Router } from "express";

import ResidentesController from "@/controllers/ResidentesControllers";
import QuartoControllers from "@/controllers/QuartoControllers";
import FunctionarioController from "@/controllers/FunctionarioController";
import HorarioMedicacoesController from "@/controllers/HorarioMedicacoesController";
import RemediosController from "@/controllers/RemediosController";
import RemediosInfoControllers from "@/controllers/RemediosInfoControllers";
import HorarioMedicacoesFuncionarioController from "@/controllers/HorarioMedicacoesFuncionarioController";
import MedicacaoInfoController from "@/controllers/MedicacaoInfoController";

const routes = Router();

routes.get("/residentes", ResidentesController.index);
routes.post("/residentes", ResidentesController.store);

routes.get("/quartos", QuartoControllers.index);
routes.post("/quartos", QuartoControllers.store);

routes.post("/funcionarios", FunctionarioController.store);
routes.get("/funcionarios", FunctionarioController.index);

routes.post("/medicacao/horario", HorarioMedicacoesController.store);

routes.post("/remedios/info", RemediosInfoControllers.store);
routes.get("/remedios/info", RemediosInfoControllers.index);

routes.post("/remedios", RemediosController.store);

routes.post(
  "/medicacao/funcionario/horario",
  HorarioMedicacoesFuncionarioController.store
);

routes.post("/medicacao/info", MedicacaoInfoController.store);

export default routes;
