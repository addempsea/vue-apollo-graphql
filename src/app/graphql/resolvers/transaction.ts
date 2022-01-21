import { Prisma } from '@prisma/client'
import { Context } from '../context'
import { TransactionFilter, Transaction } from '../../types'

const transactionResolvers = {
  Query: {
    Transactions: async (parent: Transaction, args: TransactionFilter, context: Context, info: any) => {
      try {
        const { filter } = args
        const { from, to = new Date() } = filter || {}
        if (from) {
          return context.prisma.transactions.findMany({
            where: {
              transactionDate: {
                gte: new Date(from),
                lte: new Date(to),
              },
            },
          })
        }
        return context.prisma.transactions.findMany()
      } catch (error) {
        console.error(error)
      }
    },
    Transaction: async (parent: Transaction, args: Prisma.TransactionsWhereUniqueInput, context: Context, info: any) => {
      try {
        const { id } = args

        const response = await context.prisma.transactions.findUnique({
          where: {
            id,
          },
        })

        return response
      } catch (error) {
        console.error(error)
      }
    },
  },
}

export default transactionResolvers
