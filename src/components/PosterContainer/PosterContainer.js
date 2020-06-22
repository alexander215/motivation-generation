import React, { useState } from 'react'
import PhotoContainer from '../PhotoContainer/PhotoContainer'

const PosterContainer = () => {
  const [generate, setGenerate] =  useState(false)
  const [image, setImage] = useState(null)


  return (
    <div>
      This is the poster container.
      <div onClick={() => setGenerate(true)}>Generate</div>
      <PhotoContainer />
    </div>
  )
}

export default PosterContainer;
