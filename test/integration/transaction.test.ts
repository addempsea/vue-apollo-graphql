import chai from 'chai'
import chaiHttp from 'chai-http'
import app from '../../src/app/main'

const { expect } = chai
chai.use(chaiHttp)

const baseUrl = '/graphql'
describe('Transactions', () => {
  it('should return all transactions', (done) => {
    chai
      .request(app)
      .post(baseUrl)
      .send({
        query: `
          query {
            Transactions(filter: { from: "", to: "" }) {
              id
              amount
              description
              createdAt
            }
          }
        `,
      })
      .end((err, res) => {
        expect(res.status).to.be.equal(200)
        expect(res.body.data.Transactions).to.be.an('array')
        done(err)
      })
  })
  it('should return a transaction', (done) => {
    chai
      .request(app)
      .post(baseUrl)
      .send({
        query: `
          query {
            Transaction(id: "c6f1c9d8-3b9c-4ed5-ab31-4e816e401e7c") {
              id
              amount
              description
              createdAt
            }
          }
        `,
      })
      .end((err, res) => {
        expect(res.status).to.be.equal(200)
        expect(res.body.data.Transaction).to.be.an('object')
        done(err)
      })
  })
  it('should filter transaction based on range of date', (done) => {
    chai
      .request(app)
      .post(baseUrl)
      .send({
        query: `
          query {
            Transactions(filter: { from: "2020-01-01", to: "2020-01-02" }) {
              id
              amount
              description
              createdAt
            }
          }
        `,
      })
      .end((err, res) => {
        expect(res.body.data.Transactions).to.be.an('array')
        done(err)
      })
  })
})
