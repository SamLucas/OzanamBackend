import { HorarioMedicacoes, Funcionarios } from "@/models";

class HorarioMedicacoesController {
  async store(req, res) {
    const { horario, funcionario_id } = req.body;

    if (!horario || !funcionario_id)
      return res.status(401).json({ message: "Data receive invalid." });

    if (typeof horario !== "number")
      return res.status(401).json({ message: "Time invalid." });

    const funcionario = await Funcionarios.findOne({
      where: { id: funcionario_id }
    });

    if (!funcionario)
      return res.status(401).json({ message: "Fuctionary invalid." });

    const horarioMedicacao = await HorarioMedicacoes.create({
      horario,
      funcionario_id
    });

    return res.json(horarioMedicacao);
  }
}

export default new HorarioMedicacoesController();
