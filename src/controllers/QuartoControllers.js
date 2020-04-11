import { Quartos } from "@/models";

class QuartoControllers {
  async index(req, res) {
    const bedrooms = await Quartos.findAll();
    return res.json(bedrooms);
  }

  async store(req, res) {
    const {
      tipo,
      quantidade_cama,
      quantidade_pesoa_max,
      quantidade_pesoa,
      numero_quarto
    } = req.body;

    if (quantidade_cama === null || tipo === null || numero_quarto === null)
      return res.status(401).json({ message: "Data invalid." });

    const bedroom = await Quartos.create({
      tipo,
      quantidade_cama,
      quantidade_pesoa_max,
      quantidade_pesoa,
      numero_quarto
    });

    return res.json({ bedroom });
  }
}

export default new QuartoControllers();
