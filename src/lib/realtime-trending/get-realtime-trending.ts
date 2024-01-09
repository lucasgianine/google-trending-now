import 'dotenv/config'
import { getJson } from 'serpapi'
import createTrendingNews from '../../services/create-trending-news'

const api_key = process.env.SERPAPI_API_KEY

type GetRealTimeTrendingParams = {
  cat: string,
  amount: number | 10,
  geo?: string,
  hl?: string
}

export function getRealtimeTrending(
  params: GetRealTimeTrendingParams
) {
  getJson({
    api_key,
    engine: 'google_trends_trending_now',
    frequency: 'realtime',
    output: 'json',
    cat: params.cat,
    geo: params.geo || 'US',
    hl: params.hl || 'pt'
  })
    .then(async (json) => {
      let currentRealtimeNews: any
      for (let i = 0; i < params.amount; i++) {
        currentRealtimeNews = json['trending_searches'][i]
        await createTrendingNews(currentRealtimeNews)
      }

      return
    })
}
