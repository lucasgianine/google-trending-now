import { getRealtimeTrending } from './get-realtime-trending'

  ; (async function runRealtime() {
    try {
      getRealtimeTrending({ cat: 'all', amount: 10 })
    } catch (error) { console.log(error) }
  })()
