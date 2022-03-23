// process.env.NODE_ENV = 'test';

const mongoose = require('mongoose');

const chai = require('chai');
const chaiHttp = require('chai-http');
const Polygon = require('../schema/polygonSchema');
const app = require('../app');
const seedDB = require('../data/seed-test');

chai.should();

chai.use(chaiHttp);

describe('Testing the Vested Back-End', () => {
  beforeEach(async () => {
    await seedDB();
  });
  describe('/GET polygon', () => {
    it('Fetches all polygon data', (done) => {
      chai
        .request(app)
        .get('/api/polygon')
        .end((err, res) => {
          const { result } = res.body;
          res.should.have.status(200);
          result.should.have.lengthOf(2466);
          done();
        });
    });
  });
});
