import { HorarioMedicacoes, Funcionarios } from "@/models";

class HorarioMedicacoesController {
  async store(req, res) {
    const { horario } = req.body;

    if (!horario)
      return res.status(401).json({ message: "Data receive invalid." });

    if (typeof horario !== "number")
      return res.status(401).json({ message: "Time invalid." });

    const horarioMedicacao = await HorarioMedicacoes.create({
      horario
    });

    return res.json(horarioMedicacao);
  }
}

export default new HorarioMedicacoesController();
