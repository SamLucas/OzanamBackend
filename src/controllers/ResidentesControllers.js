import { Residentes, Quartos } from "@/models";

class ResidentesControllers {
  async index(req, res) {
    const residentes = await Residentes.findAll({
      include: { model: Quartos }
    });

    return res.json(residentes);
  }

  async store(req, res) {
    const { nome, cpf, sexo, rg, idade, telefone, quarto_id } = req.body;

    const quarto = await Quartos.findOne({ where: { id: quarto_id } });
    if (!quarto) return res.status(401).json({ message: "Bedroom not find." });

    const residente = await Residentes.create({
      nome,
      cpf,
      sexo,
      rg,
      idade,
      telefone,
      quarto_id
    });

    return res.json({ residente });
  }
}

export default new ResidentesControllers();
