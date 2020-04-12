import { Remedios } from "@/models";

class RemediosControllers {
  async index(req, res) {
    const residentes = await Remedios.findAll();
    return res.json(residentes);
  }

  async store(req, res) {
    const { nome, descricao } = req.body;

    if (!nome || !descricao) return res.status(401).send();

    const remedio = await Remedios.create({
      nome,
      descricao
    });

    return res.json(remedio);
  }
}

export default new RemediosControllers();
