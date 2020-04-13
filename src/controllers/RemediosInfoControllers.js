import { RemediosInfos } from "@/models";

class RemediosControllers {
  async index(req, res) {
    // const residentes = await RemediosInfo.findAll();
    return res.json([]);
  }

  async store(req, res) {
    const { nome, descricao } = req.body;

    if (!nome || !descricao) return res.status(401).send();

    const remedio = await RemediosInfos.create({
      nome,
      descricao
    });

    return res.json(remedio);
  }
}

export default new RemediosControllers();
