import { Prisma, PrismaClient } from '@prisma/client'
import * as fs from 'fs'
import { parse } from '@fast-csv/parse'
import path from 'path'

const prisma = new PrismaClient()
const transactions: Prisma.TransactionsCreateInput[] = []

export const main = async () => {
  const [first, ...rest] = transactions
  delete first.id
  await prisma.transactions.createMany({
    data: rest.map((t) => ({
      ...t,
      amount: Number(t.amount),
      createdAt: new Date(`${t.createdAt}`),
      transactionDate: new Date(`${t.transactionDate}`),
      updatedAt: new Date(`${t.updatedAt}`),
    })),
  })
}

fs.createReadStream(path.resolve(__dirname, 'Transactions.csv'))
  .pipe(parse({ headers: true }))
  .on('error', (error) => console.error(error))
  .on('data', (row: Prisma.TransactionsCreateInput) => transactions.push(row))
  .on('end', () => {
    main()
      .catch((e) => {
        console.error(e)
        process.exit(1)
      })
      .finally(async () => {
        await prisma.$disconnect()
      })
  })
