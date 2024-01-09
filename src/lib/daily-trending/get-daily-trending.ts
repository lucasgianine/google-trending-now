import 'dotenv/config'
import { getJson } from 'serpapi'
import createTrendingNews from '../../services/create-trending-news'

const api_key = process.env.SERPAPI_API_KEY

type GetDailyTrendingParams = {
  date: string,
  amount: number,
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

      for (let i = 0; i < params.amount; i++) {
        data = json['daily_searches'][i]
        await createTrendingNews({ data, trending })
        console.log(`Foi criado ${i + 1} trending news (diário) de ${params.amount}`)
      }

      return
    })
}
