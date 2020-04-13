import { RemediosInfos } from "@/models";

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
    }).catch(ele => console.log(ele));

    if (!DataRemedioInfo)
      return res
        .status(401)
        .json({ message: "Data of medicine information not found." });

    return res.json({ id: "id" });
  }
}

export default new RemediosController();
