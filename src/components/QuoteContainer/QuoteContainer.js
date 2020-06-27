import React, { useState, useEffect } from 'react'

const QuoteCointainer = () => {
  
  const [currentQuote, setCurrentQuote] = useState(0);
  
  let quotes = [
    { quote: "It aint over till it's over!",
      speaker: "Yogi Berra" },
    { quote: "Believe you can and you’re halfway there.",
      speaker: "Theodore Roosevelt" },
  ]

  useEffect(() => {
    let ranNum = Math.floor(Math.random() * Math.floor(quotes.length));
    setCurrentQuote(
      { quote: quotes[ranNum].quote,
        speaker: quotes[ranNum].speaker
      }

    )
  });


  return (
    <div>
      "{currentQuote.quote}"
      - {currentQuote.speaker}
    </div>
  )
}

export default QuoteCointainer
