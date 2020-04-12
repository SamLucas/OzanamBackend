import { Truncate } from "#/utils/truncate";
import Moock from "#/factories";
import bcrypt from "bcryptjs";
import app from "@/app";
import Request from "supertest";
import faker from "faker";

describe("HorarioMedicacao", () => {
  it("should create new medication time.", async () => {
    const funcionario = await Moock.factory.create("Funcionario");

    const response = await Request(app)
      .post("/medication_time")
      .send({
        horario: new Date().getTime(),
        funcionario_id: funcionario.id
      });

    expect(response.status).toBe(200);

    expect(response.body).toHaveProperty("id");
  });

  it("should no create new medication time without time defined.", async () => {
    const funcionario = await Moock.factory.create("Funcionario");

    const response = await Request(app)
      .post("/medication_time")
      .send({
        funcionario_id: funcionario.id
      });

    expect(response.status).toBe(401);
  });

  it("should no create new medication time without idetification the functionary defined.", async () => {
    const response = await Request(app)
      .post("/medication_time")
      .send({
        horario: new Date().getTime()
      });

    expect(response.status).toBe(401);
  });

  it("should no create new medication time with idetification the functionary no-existent.", async () => {
    const response = await Request(app)
      .post("/medication_time")
      .send({
        horario: new Date().getTime(),
        funcionario_id: -1
      });

    expect(response.status).toBe(401);
  });
});
