import { Quartos } from "@/models";
import { Truncate } from "#/utils/truncate";

describe("Quartos", () => {
  beforeEach(async () => {
    await Truncate();
  });

  it("should create a new bedroom", async () => {
    const quarto = await Quartos.create({
      quantidade_cama: 2,
      tipo: true,
      quantidade_pesoa_max: 5,
      quantidade_pesoa: 2,
      numero_quarto: 81
    });

    expect(quarto).toHaveProperty("id");
  });
});
