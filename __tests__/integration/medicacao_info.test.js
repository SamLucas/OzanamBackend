import app from "@/app";
import Request from "supertest";
import Moock from "#/factories";

describe("Info of Medication ", () => {
  const valuesInterval = ["4h", "8h", "16h", "12h", "24"];

  const generateData = async () => {
    const numberRandom = Math.random();
    const nome = `Buscopan${numberRandom}`;

    const residente = await Moock.factory.create("Residentes");
    const horarioMedicacao = await Moock.factory.create("HorarioMedicao");
    const remedioInfo = await Moock.factory.create("RemedioInfo", { nome });
    const remedio = await Moock.factory.create("Remedio", {
      remedios_info_id: remedioInfo.id
    });

    return {
      residente_id: residente.id,
      remedio_id: remedio.id,
      horario_medicacao_id: horarioMedicacao.id
    };
  };

  it("should cadatre a new medication with data valid.", async () => {
    const DataSend = await generateData();
    const response = await Request(app)
      .post("/medicacao/info")
      .send({
        dosagem: 3,
        intervalo: valuesInterval[Math.floor(Math.random() * 5)],
        status: true,
        ...DataSend
      });

    expect(response.body).toHaveProperty("id");
  });

  it("should not cadatre a new medication with data invalid.", async () => {
    const response = await Request(app)
      .post("/medicacao/info")
      .send();

    expect(response.status).toBe(401);
  });

  it("should not cadatre a new medication without resident valid.", async () => {
    const DataSend = await generateData();
    const response = await Request(app)
      .post("/medicacao/info")
      .send({
        dosagem: 3,
        intervalo: valuesInterval[Math.floor(Math.random() * 5)],
        status: true,
        ...DataSend,
        residente_id: 23090239
      });

    expect(response.status).toBe(401);
  });

  it("should not cadatre a new medication without time medication.", async () => {
    const DataSend = await generateData();
    const response = await Request(app)
      .post("/medicacao/info")
      .send({
        dosagem: 3,
        intervalo: valuesInterval[Math.floor(Math.random() * 5)],
        status: true,
        ...DataSend,
        horario_medicacao_id: 23090239
      });

    expect(response.status).toBe(401);
  });

  it("should not cadatre a new medication without medicine valid.", async () => {
    const DataSend = await generateData();
    const response = await Request(app)
      .post("/medicacao/info")
      .send({
        dosagem: 3,
        intervalo: valuesInterval[Math.floor(Math.random() * 5)],
        status: true,
        ...DataSend,
        remedio_id: 23090239
      });

    expect(response.status).toBe(401);
  });

  it("should not cadatre a new medication without interval valid.", async () => {
    const DataSend = await generateData();
    const response = await Request(app)
      .post("/medicacao/info")
      .send({
        dosagem: 3,
        intervalo: "uma hora",
        status: true,
        ...DataSend
      });

    expect(response.status).toBe(401);
  });
});
