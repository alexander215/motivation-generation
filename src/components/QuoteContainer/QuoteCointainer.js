import React from 'react'

const QuoteCointainer = () => {
  let quotes = {
    quote: "It aint over till it's over!",
    speaker: "Yogi Berra"
  }
  return (
    <div>
      "{quotes.quote}"
      - {quotes.speaker}
    </div>
  )
}

export default QuoteCointainer
