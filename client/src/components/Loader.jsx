import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player';

const loader = () => {
  return (
    <div className='w-screen h-screen absolute bg-white z-999'>
        <Player/>
    </div>
  )
}

export default loader