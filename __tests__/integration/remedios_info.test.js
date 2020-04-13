import Request from "supertest";
import faker from "faker";
import app from "@/app";

import Moock from "#/factories";

describe("Medicine Information ", () => {
  it("should list data the medications.", async () => {
    const response = await Request(app).get("/remedios/info");
    expect(Array.isArray(response.body)).toBe(true);
  });

  it("should create a medicine with data valid.", async () => {
    const response = await Request(app)
      .post("/remedios/info")
      .send({
        nome: faker.name.findName(),
        descricao: faker.lorem.paragraphs()
      });

    expect(response.body).toHaveProperty("id");
  });

  it("should not create a medicine without data.", async () => {
    const response = await Request(app)
      .post("/remedios/info")
      .send({
        nome: "",
        descricao: ""
      });

    expect(response.status).toBe(401);
  });

  it("should not create a medicine with repeat name.", async () => {
    const numberRandom = Math.random();
    const nome = `Buscopan${numberRandom}`;

    await Moock.factory.create("RemedioInfo", {
      nome
    });

    const response = await Request(app)
      .post("/remedios/info")
      .send({
        nome,
        descricao:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur omnis fugit eius pariatur, non officia deserunt velit obcaecati eveniet quia. Voluptas enim nulla voluptate voluptatum dolor, deleniti eaque eius iste."
      });

    expect(response.status).toBe(401);
    expect(response.body).toHaveProperty("data");
  });
});
