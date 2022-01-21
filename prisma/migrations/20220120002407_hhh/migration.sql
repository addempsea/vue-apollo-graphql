-- AlterTable
ALTER TABLE "Transactions" ALTER COLUMN "description" DROP NOT NULL,
ALTER COLUMN "category" DROP NOT NULL,
ALTER COLUMN "reference" DROP NOT NULL;
