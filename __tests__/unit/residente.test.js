import { Residente, Quarto } from "@/models";
import { Truncate } from "#/utils/truncate";

describe("Residente", () => {
  afterEach(async () => {
    await Truncate();
  });

  it("should create a new resident", async () => {
    const { id } = await Quarto.create({
      quantidade_cama: 2,
      tipo: true,
      quantidade_pesoa_max: 5,
      quantidade_pesoa: 2,
      numero_quarto: 81
    });

    const residente = await Residente.create({
      nome: "asldçkasd",
      cpf: "ewe9r08we",
      sexo: false,
      rg: "392804802394",
      idade: 30,
      telefone: "2930482938402",
      quarto_id: id
    });

    // const data = await Residente.findAll({ include: [{ model: Quarto }] });
    // console.log(data);

    expect(residente).toHaveProperty("id");
  });
});
