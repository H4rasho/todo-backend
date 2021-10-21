const request = require("supertest");
const app = require("../index");

describe("GET /todo", () => {
  it("respnde con un formato json y un status 200", (done) => {
    request(app)
      .get("/api/todo")
      .expect("Content-Type", /json/)
      .expect(200)
      .end((err) => {
        if (err) return done(err);
        return done();
      });
  });
});

describe("PUT /todo", () => {
  it("responde con un status 200", (done) => {
    request(app)
      .put("/api/todo/delete/61706312da24433d4ed185ed")
      .expect("Content-Type", /json/)
      .expect(200)
      .end((err) => {
        if (err) return done(err);
        return done();
      });
  });
  it("responde con un status 404 not found", (done) => {
    request(app)
      .put("/api/todo/delete/61706312da24433d4ed185ef")
      .expect("Content-Type", /json/)
      .expect(200)
      .end((err) => {
        if (err) return done(err);
        return done();
      });
  });
});

describe("POST /todo", () => {
  it("responde con un status 201 created", (done) => {
    request(app)
      .post("/api/todo")
      .send({ description: "terminar todo backend con super test" })
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(201)
      .end((err) => {
        if (err) return done(err);
        return done();
      });
  });
});
