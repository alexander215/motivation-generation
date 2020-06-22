import React, { useState } from 'react'
import PhotoContainer from '../PhotoContainer/PhotoContainer'
import { getRoles } from '@testing-library/react'

const PosterContainer = () => {
  const [generate, setGenerate] =  useState(false)
  const [image, setImage] = useState(null)

  let displayPhoto = null;
  if (generate) { displayPhoto =  <PhotoContainer />}


  return (
    <div>
      This is the poster container.
      <div onClick={() => setGenerate(!generate)}>Generate</div>
      {displayPhoto}
    </div>
  )
}

export default PosterContainer;
