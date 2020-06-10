const app = require("../server");
const chai = require("chai");
const chaiHttp = require("chai-http");

const { expect } = chai;

chai.use(chaiHttp);
describe("Server is working in a healthy manner!", () => {
  it("Server is up!", (done) => {
    chai
      .request(app)
      .get("/")
      .end((err, res) => {
        expect(res).to.have.status(20);
        expect(res.text).to.equal("Welcome Elite");
        done();
      });
  });
});
