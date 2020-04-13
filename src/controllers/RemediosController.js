import { RemediosInfos, Remedios } from "@/models";

class RemediosController {
  async index(req, res) {
    return res.json([]);
  }

  async store(req, res) {
    const { quantidade, tipo, remedio_info_id } = req.body;

    if (!quantidade || !tipo || !remedio_info_id)
      return res.status(401).json({ message: "Data Incomplete or null." });

    const DataRemedioInfo = await RemediosInfos.findOne({
      where: { id: remedio_info_id }
    });

    if (!DataRemedioInfo)
      return res
        .status(401)
        .json({ message: "Data of medicine information not found." });

    if (
      !["gota", "comprimido", "miligramas", "gramas"].find(ele => ele === tipo)
    )
      return res.status(401).json({ message: "Type of medicine invalid." });

    if (quantidade <= 0)
      return res.status(401).json({ message: "Quantility invalid." });

    const remedio = await Remedios.create({
      quantidade,
      tipo,
      remedio_info_id
    });

    return res.json(remedio);
  }
}

export default new RemediosController();
