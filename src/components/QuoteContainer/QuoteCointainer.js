import React from 'react'

const QuoteCointainer = () => {
  let quotes = [
    {
    quote: "It aint over till it's over!",
    speaker: "Yogi Berra"
    },
    {
    quote: "Believe you can and you’re halfway there.",
    speaker: "Theodore Roosevelt"
    },

  ]

  let currentQuote = { 
    quote: currentQuote[0]speaker,
    speaker: currentQuote[0].speaker
  }

  return (
    <div>
      "{quotes.quote}"
      - {quotes.speaker}
    </div>
  )
}

export default QuoteCointainer
