import 'dotenv/config'
import { getJson } from 'serpapi'
import createTrendingNews from '../../services/create-trending-news'

const api_key = '61102a182d075137f5d198c06257e77fadbd833e0460d644f64494d1b1a8a201'

type GetMonthTrendingParams = {
  month: string,
  year: string,
  geo?: string,
  hl?: string
}

export async function getMonthTrending(
  params: GetMonthTrendingParams
) {
  try {
    await Promise.all(
      getDaysInMonth(Number(params.month), Number(params.year))
        .map(async (date) => {
          await getJson({
            api_key,
            engine: 'google_trends_trending_now',
            frequency: 'daily',
            output: 'json',
            date,
            geo: params.geo || 'US',
            hl: params.hl || 'pt'
          })
            .then(async (json) => {
              const trending = { date, geo: params.geo, hl: params.hl, trendingType: 'daily' }

              const data = json['daily_searches'][0]
              await createTrendingNews({ data, trending })
              console.log(`A trend do mês ${params.month} foi criada!`)
            })
        })
    )
  } catch (error) {
    console.log(error)
  }
}

function getDaysInMonth(month: number, year: number): string[] {
  const lastDay = new Date(year, month, 0).getDate()
  const days: string[] = []
  for (let day = 1; day <= lastDay; day++) {
    days.push(`${year}${month < 10 ? '0' + (month) : month}${day}`)
  }

  return days
}
