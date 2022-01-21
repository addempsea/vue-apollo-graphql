import { gql } from 'apollo-server'

const transactionSchema = gql`
  ## scalar
  scalar Date

  ## type
  type Transaction {
    id: ID! # The ! means that every transaction object _must_ have an id
    account: String
    description: String
    category: String
    reference: String
    currency: String
    amount: Float
    status: String
    transactionDate: Date
    createdAt: Date
    updatedAt: Date
  }

  ## input
  input TransactionFilter {
    from: Date!
    to: Date!
  }

  ## Query
  type Query {
    Transactions(filter: TransactionFilter): [Transaction]
    Transaction(id: ID!): Transaction
  }
`

export default transactionSchema
