import app from "@/app";
import Request from "supertest";
import Moock from "#/factories";

describe("Info of Medication ", () => {
  const valuesInterval = ["4h", "8h", "16h", "12h", "24"];

  it("should cadatre a new medication with data valid.", async () => {
    const residente = await Moock.factory.create("Residentes");
    const horarioMedicacao = await Moock.factory.create("HorarioMedicao");
    const remedioInfo = await Moock.factory.create("RemedioInfo");
    const remedio = await Moock.factory.create("Remedio", {
      remedio_info_id: remedioInfo.id
    });

    const response = await Request(app)
      .post("/medicacao/info")
      .send({
        dosagem: 3,
        intervalo: valuesInterval[Math.floor(Math.random() * 5)],
        status: true,
        residente_id: residente.id,
        remedio_id: remedio.id,
        horario_medicacao_id: horarioMedicacao.id
      });

    expect(response.body).toHaveProperty("id");
  });
});
