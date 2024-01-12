import { getMonthTrending } from './get-month-trending'

  ; (async function runMonth() {
    try {
      getMonthTrending({ month: '12', year: '2023' })
    } catch (error) { console.log(error) }
  })()
