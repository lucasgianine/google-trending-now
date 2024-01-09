import { getDailyTrending } from './get-daily-trending'

  ; (async function runDaily() {
    try {
      getDailyTrending({ date: Date.now().toString(), amount: 10 })
    } catch (error) { console.log(error) }
  })()
