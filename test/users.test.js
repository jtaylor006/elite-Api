const app = require("../server");
const chai = require("chai");
const chaiHttp = require("chai-http");

const { expect } = chai;

chai.use(chaiHttp);

describe("able to get all users with stories", () => {
  it("Grabs the necessary users", (done) => {
    chai
      .request(app)
      .get("/api/users")
      .end((err, res) => {
        expect(res).to.have.status(200);
        // expect statement for body to have an array
        done();
      });
  });
});
