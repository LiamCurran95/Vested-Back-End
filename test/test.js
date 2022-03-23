// process.env.NODE_ENV = 'test';

const mongoose = require("mongoose");
const Polygon = require("../schema/polygonSchema");

const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../app");
const seedDB = require("../data/seed-test");
const should = chai.should();

chai.use(chaiHttp);

describe("Testing the Vested Back-End", () => {
  beforeEach((done) => {
    seedDB();
    done();
  });

  describe("/GET polygon", () => {
    it("Fetches all polygon data", (done) => {
      chai
        .request(app)
        .get("/api/polygon")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("array");
          res.body.length.should.be.eql(0);
          done();
        });
    });
  });
});
