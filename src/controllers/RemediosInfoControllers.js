import { RemediosInfos } from "@/models";

class RemediosControllers {
  async index(req, res) {
    // const residentes = await RemediosInfo.findAll();
    return res.json([]);
  }

  async store(req, res) {
    const { nome, descricao } = req.body;

    if (!nome || !descricao) return res.status(401).send();

    const nameSuposted = await RemediosInfos.findOne({ where: { nome } });
    if (nameSuposted)
      return res
        .status(401)
        .json({ message: "Name of medicine repeat.", data: nameSuposted });

    const remedio = await RemediosInfos.create({
      nome,
      descricao
    });

    return res.json(remedio);
  }
}

export default new RemediosControllers();
