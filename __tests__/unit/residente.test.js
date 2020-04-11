import { Residentes, Quartos } from "@/models";
import { Truncate } from "#/utils/truncate";

describe("Residentes", () => {
  afterEach(async () => {
    await Truncate();
  });

  it("should create a new resident", async () => {
    const { id } = await Quartos.create({
      quantidade_cama: 2,
      tipo: true,
      quantidade_pesoa_max: 5,
      quantidade_pesoa: 2,
      numero_quarto: 81
    });

    const residente = await Residentes.create({
      nome: "asldçkasd",
      cpf: "ewe9r08we",
      sexo: false,
      rg: "392804802394",
      idade: 30,
      telefone: "2930482938402",
      quarto_id: id
    });

    expect(residente).toHaveProperty("id");
  });
});
