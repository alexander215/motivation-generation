import React, { useState } from 'react'

const PosterContainer = () => {
  const [generate, setGenerate] =  useState('Nothing here')
  return (
    <div>
      This is the poster container.
      <div onClick={() => setGenerate('Here is your picture')}>Generate</div>
      {generate}
    </div>
  )
}

export default PosterContainer;
