import { getDailyTrending } from './get-daily-trending'

  ; (async function runDaily() {
    try {
      const date = new Date()
      const year = date.getFullYear()
      const month = date.getMonth() + 1 <= 9 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
      const day = date.getDate() <= 9 ? `0${date.getDate()}` : date.getDate()
      const currentDate = `${year}${month}${day}`

      getDailyTrending({ date: currentDate })
    } catch (error) { console.log(error) }
  })()
