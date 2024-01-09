import { PrismaClient } from '@prisma/client'
import * as yup from 'yup'

export type CreateTrendingNewsParams = {
  data: object
  trending: object
}

const schema = yup.object().shape({
    data: yup.object().shape({
      id: yup.string().required(),
      title: yup.string().required(),
      link: yup.string().optional(),
      queries: yup.array().optional(),
      explore_links: yup.array().optional(),
      sparkline_chart_link: yup.string().optional(),
      articles: yup.array().optional()
    }),
    trending: yup.object().shape({
      date: yup.string().optional(),
      cat: yup.string().optional(),
      geo: yup.string().optional(),
      hl: yup.string().optional(),
      trendingType: yup.string().optional()
    })
})

export default async function createTrendingNews(
  params: CreateTrendingNewsParams
): Promise<void> {
  const prisma = new PrismaClient()
  const { data, trending } = await schema.validate(params)

  await prisma.trending.create({
    data: {
      data: data,
      trending: trending
    }
  })
}
