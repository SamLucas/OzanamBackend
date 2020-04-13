import Request from "supertest";
import Mook from "#/factories";
import app from "@/app";

describe("Times functionry", () => {
  it("should create a new relation betwen employees and medication time.", async () => {
    const funcionario = await Mook.factory.create("Funcionario");
    const time = await Mook.factory.create("HorarioMedicao");

    const response = await Request(app)
      .post("/medication_time/funcionario")
      .send({ funcionario_id: funcionario.id, times: [time.id] });

    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body[0]).toHaveProperty("id");
  });

  it("should not create a new relation without data valid.", async () => {
    const response = await Request(app)
      .post("/medication_time/funcionario")
      .send({ times: null, funcionario_id: null });

    expect(response.status).toBe(401);
  });

  it("should not create a new relation with employees invalid.", async () => {
    const times = ["1", "2", "3"];

    const response = await Request(app)
      .post("/medication_time/funcionario")
      .send({ funcionario_id: -1, times });

    expect(response.status).toBe(401);
  });

  it("should not create a new relation without employees.", async () => {
    const times = ["1", "2", "3"];
    const response = await Request(app)
      .post("/medication_time/funcionario")
      .send({ times });

    expect(response.status).toBe(401);
  });

  it("should not create when times is not array.", async () => {
    const response = await Request(app)
      .post("/medication_time/funcionario")
      .send({ times: "asd", funcionario_id: 1 });

    expect(response.status).toBe(401);
  });

  it("should not create a new relation without at lest a time option.", async () => {
    const funcionario = await Mook.factory.create("Funcionario");
    const times = [];

    const response = await Request(app)
      .post("/medication_time/funcionario")
      .send({ funcionario_id: funcionario.id, times });

    expect(response.status).toBe(401);
  });

  it("should not create a new relation with time no-exist.", async () => {
    const funcionario = await Mook.factory.create("Funcionario");
    const times = ["13"];

    const response = await Request(app)
      .post("/medication_time/funcionario")
      .send({ funcionario_id: funcionario.id, times });

    expect(response.status).toBe(401);
  });
});
