import 'dotenv/config'
import { getJson } from 'serpapi'
import createTrendingNews from '../../services/create-trending-news'

const api_key = process.env.SERPAPI_API_KEY

type GetDailyTrendingParams = {
  date: string,
  geo?: string,
  hl?: string
}

export function getDailyTrending(
  params: GetDailyTrendingParams
) {
  getJson({
    api_key,
    engine: 'google_trends_trending_now',
    frequency: 'daily',
    output: 'json',
    date: params.date,
    geo: params.geo || 'US',
    hl: params.hl || 'pt'
  })
    .then(async (json) => {
      const trending = { date: params.date, geo: params.geo, hl: params.hl, trendingType: 'daily' }
      let data: object

      try {
        data = json['daily_searches'][0]
        await createTrendingNews({ data, trending })
        console.log(`A trend diária (${params.date}) foi criada!`)
      } catch (error) {
        console.log(error)
      }
    })
}
