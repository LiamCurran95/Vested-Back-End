const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../app");
const seedDB = require("../data/seed-test");

chai.should();

chai.use(chaiHttp);

describe("Testing the Vested Back-End", () => {
  beforeEach(async () => {
    await seedDB();
  });
  describe("/GET/Polygon", () => {
    it("Fetches all polygon data", (done) => {
      chai
        .request(app)
        .get("/api/polygon")
        .end((err, res) => {
          const { result } = res.body;
          res.should.have.status(200);
          result.should.have.lengthOf(374);
          done();
        });
    });
  });
  describe("/GET/Users", () => {
    it("Fetches all User data", (done) => {
      chai
        .request(app)
        .get("/api/users")
        .end((err, res) => {
          const { result } = res.body;
          res.should.have.status(200);
          result.should.have.lengthOf(2);
          done();
        });
    });
  });
  describe("/GET/ESG", () => {
    it("Fetches all ESG data", (done) => {
      chai
        .request(app)
        .get("/api/ESG")
        .end((err, res) => {
          const { result } = res.body;
          res.should.have.status(200);
          result.should.have.lengthOf(28);
          done();
        });
    });
  });
});
