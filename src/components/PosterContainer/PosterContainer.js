import React, { useState } from 'react'
import PhotoContainer from '../PhotoContainer/PhotoContainer'
import { getRoles } from '@testing-library/react'

const PosterContainer = () => {
  // This shows whether a picture has been generated or not
  const [generate, setGenerate] =  useState(false)

  // This toggles whether a photo or button is displayed
  let displayPhoto = null;
  let generateButton = <div onClick={() => setGenerate(!generate)}>Generate a poster!</div>;
  if (generate) { 
    displayPhoto =  <PhotoContainer />;
    generateButton = null;
  }



  return (
    <div>
      This is the poster container.
      {generateButton}
      {displayPhoto}
    </div>
  )
}

export default PosterContainer;
