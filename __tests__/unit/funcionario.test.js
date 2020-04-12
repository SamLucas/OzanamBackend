import { Truncate } from "#/utils/truncate";
import Moock from "#/factories";
import bcrypt from "bcryptjs";

describe("Funcionarios", () => {
  beforeEach(async () => {
    await Truncate();
  });

  it("should cadastre a funcionary with data valid.", async () => {
    const funcionario = await Moock.factory.create("Funcionario");
    expect(funcionario).toHaveProperty("id");
  });

  it("should cadastre a funcionary with password encrypted.", async () => {
    const funcionario = await Moock.factory.create("Funcionario", {
      password: "samuellucas"
    });

    const compareHash = await bcrypt.compare(
      "samuellucas",
      funcionario.password_hash
    );

    expect(compareHash).toBe(true);
  });
});
