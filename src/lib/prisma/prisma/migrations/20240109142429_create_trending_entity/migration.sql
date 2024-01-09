-- CreateTable
CREATE TABLE "trending" (
    "id" UUID NOT NULL,
    "data" JSONB,
    "trending" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "trending_pkey" PRIMARY KEY ("id")
);
