import Request from "supertest";
import faker from "faker";
import app from "@/app";

describe("Medicine", () => {
  it("should create a medicine with data valid.", async () => {
    const response = await Request(app)
      .post("/remedios")
      .send({
        nome: faker.name.findName(),
        descricao: faker.lorem.paragraphs()
      });

    expect(response.body).toHaveProperty("id");
  });

  it("should not create a medicine without data.", async () => {
    const response = await Request(app)
      .post("/remedios")
      .send({
        nome: "",
        descricao: ""
      });

    expect(response.status).toBe(401);
  });

  it("should list data the medications.", async () => {
    const response = await Request(app).get("/remedios");
    expect(Array.isArray(response.body)).toBe(true);
  });
});
