import Request from "supertest";
import faker from "faker";
import app from "@/app";

import Moock from "#/factories";

describe("Medicine", () => {
  it("should cadatre medicine with data valid.", async () => {
    const remedioInfo = await Moock.factory.create("RemedioInfo");

    const response = await Request(app)
      .post("/remedios")
      .send({
        quantidade: 40,
        tipo: "gota",
        remedio_info_id: remedioInfo.id
      });

    expect(response.body).toHaveProperty("id");
  });

  it("should not cadastre medicine without data", async () => {
    const response = await Request(app)
      .post("/remedios")
      .send();

    expect(response.status).toBe(401);
  });

  it("should not cadastre medicine with data description invalid.", async () => {
    const response = await Request(app)
      .post("/remedios")
      .send({
        quantidade: 40,
        tipo: "gota",
        remedio_info_id: -1
      });

    expect(response.status).toBe(401);
  });

  // it("should not cadastre medicine with type of medicine invalid.", async () => {
  // const remedioInfo = await Moock.factory.create("RemedioInfo");
  // console.log(remedioInfo);

  // const response = await Request(app)
  //   .post("/remedios")
  //   .send({
  //     quantidade: 40,
  //     tipo: "remedio",
  //     remedio_info_id: remedioInfo.id
  //   });

  //   expect(401).toBe(401);
  // });
});
