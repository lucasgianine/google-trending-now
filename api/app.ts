import express from 'express'
import { getDailyTrending } from '../src/lib/daily-trending/get-daily-trending'
import { getRealtimeTrending } from '../src/lib/realtime-trending/get-realtime-trending'
import { getMonthTrending } from '../src/lib/daily-trending/get-month-trending'
import getTrendsByQueries from '../src/services/get-trends-by-queries'

const app = express()
const port = 3000

app.post('/daily', (req, res) => {
  const date = req.body.date // required
  const geo = req.body.geo // optional
  const hl = req.body.hl // optional

  try {
    getDailyTrending({ date, geo, hl })
  } catch (error) { console.log(error) }
})

app.post('/month', (req, res) => {
  const month = req.body.month // required
  const year = req.body.year // required
  const geo = req.body.geo // optional
  const hl = req.body.hl // optional

  try {
    getMonthTrending({ month, year, geo, hl })
  } catch (error) { console.log(error) }
})

app.post('/realtime', (req, res) => {
  const cat = req.body.cat // required
  const amount = req.body.amount // required
  const geo = req.body.geo // optional
  const hl = req.body.hl // optional

  try {
    getRealtimeTrending({ cat, amount, geo, hl })
  } catch (error) { console.log(error) }
})

app.get('/trends', (req, res) => {
  const query = req.query.query as string // required

  try { getTrendsByQueries(query) }
  catch (error) { console.log(error) }
})

app.use(express.json())
app.listen(port, () => {
  console.log('Server is running')
})
