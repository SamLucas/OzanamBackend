import app from "@/app";
import Request from "supertest";

describe("Horario Medicacao", () => {
  it("should create new medication time.", async () => {
    const response = await Request(app)
      .post("/medicacao/horario")
      .send({
        horario: new Date().getTime()
      });
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("id");
  });

  it("should no create new medication time without time defined.", async () => {
    const response = await Request(app)
      .post("/medicacao/horario")
      .send();
    expect(response.status).toBe(401);
  });
});
