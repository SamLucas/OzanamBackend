import {
  HorariosFuncionarios,
  HorarioMedicacoes,
  Funcionarios
} from "@/models";

class HorarioMedicacoesFuncionarioController {
  async store(req, res) {
    const { funcionario_id, times } = req.body;

    if (!times || !funcionario_id)
      return res.status(401).json({ message: "Data invalid." });

    const funcionario = await Funcionarios.findOne({
      where: { id: funcionario_id }
    });

    if (!funcionario)
      return res.status(401).json({ message: "Employee not find." });

    if (!Array.isArray(times))
      return res.status(401).json({ message: "Times is not array." });

    if (times.length === 0)
      return res.status(401).json({ message: "Times is array empty." });

    const dataHorarios = await HorarioMedicacoes.findAll();
    let timeValid = false;
    times.map(t => {
      if (!dataHorarios.find(ele => ele.id === t)) timeValid = true;
    });

    if (timeValid)
      return res.status(401).json({ message: "Times is not valid" });

    const data = [];

    times.map(t => data.push({ funcionario_id, horario_medicacoes_id: t }));

    const response = await HorariosFuncionarios.bulkCreate(data)
      .then(data => data)
      .catch(data => console.log(data));

    return res.json(response);
  }
}

export default new HorarioMedicacoesFuncionarioController();
