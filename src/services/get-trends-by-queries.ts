import { PrismaClient } from '@prisma/client'

export default async function getTrendsByQueries(
  query: string
) {
  const prisma = new PrismaClient()

  const data = await prisma.trending.findMany({
    where: {
      trending: {
        path: ['trendingType'],
        equals: 'daily',
        string_contains: query
      },
    },
  })

  return data
}
