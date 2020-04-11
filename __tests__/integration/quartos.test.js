import app from "@/app";
import Request from "supertest";
import Moock from "#/factories";
import faker from "faker";

import { Truncate } from "#/utils/truncate";

describe("Quartos", () => {
  afterEach(async () => {
    await Truncate();
  });

  const dataBedroom = {
    tipo: true,
    quantidade_cama: faker.random.number(),
    quantidade_pesoa_max: faker.random.number(),
    quantidade_pesoa: faker.random.number(),
    numero_quarto: faker.random.number()
  };

  it("should cadatre bedrooom with data valid.", async () => {
    const response = await Request(app)
      .post("/bedrooms")
      .send(dataBedroom);

    expect(response.status).toBe(200);
  });

  it("should not cadatre bedromm with data invalid", async () => {
    const response = await Request(app)
      .post("/bedrooms")
      .send({
        ...dataBedroom,
        quantidade_cama: null,
        tipo: null,
        numero_quarto: null
      });

    expect(response.status).toBe(401);
  });

  it("should list information about bedroom.", async () => {
    const response = await Request(app).get("/bedrooms");
    expect(Array.isArray(response.body)).toBe(true);
  });
});
