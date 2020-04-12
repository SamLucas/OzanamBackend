import { Funcionarios } from "@/models";

class QuartoControllers {
  async index(req, res) {
    const funcionario = await Funcionarios.findAll();
    return res.json(funcionario);
  }

  async store(req, res) {
    const {
      nome,
      email,
      password,
      cpf,
      rg,
      sexo,
      telefone,
      endereco,
      funcao
    } = req.body;

    if (!nome || !email || !password || !funcao)
      return res.status(401).json({ message: "Data invalid." });

    if (!["farmaceutico", "enfermeira", "tecnico"].find(ele => ele === funcao))
      return res.status(401).json({ message: "Function type invalid." });

    const funcionario = await Funcionarios.create({
      nome,
      email,
      password,
      cpf,
      rg,
      sexo,
      telefone,
      endereco,
      funcao
    });

    return res.json(funcionario);
  }
}

export default new QuartoControllers();
