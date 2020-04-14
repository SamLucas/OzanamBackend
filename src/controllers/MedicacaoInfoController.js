import {
  Residentes,
  Remedios,
  HorarioMedicacoes,
  MedicacoesInfo
} from "@/models";

class MedicacaoInfoController {
  async store(req, res) {
    const {
      dosagem,
      intervalo,
      status,
      residente_id,
      remedio_id,
      horario_medicacao_id
    } = req.body;

    if (
      !dosagem ||
      !dosagem < 0 ||
      !intervalo ||
      !status ||
      !residente_id ||
      residente_id < 0 ||
      !remedio_id ||
      remedio_id < 0 ||
      !horario_medicacao_id ||
      horario_medicacao_id < 0
    )
      return res.status(401).json({ message: "Some data is invalid." });

    const residente = await Residentes.findOne({ where: { id: residente_id } });
    if (!residente)
      return res.status(401).json({ message: "Resident not found." });

    const horarioMedicacao = await HorarioMedicacoes.findOne({
      where: { id: horario_medicacao_id }
    });
    if (!horarioMedicacao)
      return res.status(401).json({ message: "Time of medication not found." });

    const remedio = await Remedios.findOne({ where: { id: remedio_id } });
    if (!remedio)
      return res.status(401).json({ message: "Medicine not found." });

    if (!["4h", "8h", "16h", "12h", "24"].find(ele => ele === intervalo))
      return res.status(401).json({ message: "Inteval invalid." });

    const medicacaoInfo = await MedicacoesInfo.create({
      dosagem,
      intervalo,
      status,
      residente_id,
      remedio_id,
      horario_medicacao_id
    });

    return res.json(medicacaoInfo);
  }
}

export default new MedicacaoInfoController();
