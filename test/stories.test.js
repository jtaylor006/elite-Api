const app = require("../server");
const chai = require("chai");
const chaiHttp = require("chai-http");

const { expect } = chai;

chai.use(chaiHttp);
describe("User is able to interact with story API", () => {
  it("Able to grab all of the stories from the database", (done) => {
    chai
      .request(app)
      .get("/api/stories")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.haveOwnProperty('stories')
        done();
      });
  });
});
