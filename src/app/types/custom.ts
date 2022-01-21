export type TransactionFilter = {
  filter: {
    from: string
    to: string
  }
}
export type Transaction = {
  id: string
  account: string
  description: string
  category: string
  reference: string
  currency: string
  amount: number
  status: string
  transactionDate: string
  createdAt: string
  updatedAt: string
}
