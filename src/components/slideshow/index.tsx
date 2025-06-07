'use client'
import React, { useState } from 'react'

type ImageSliderProps = {
  imageUrls: string[];
}
function SlideShow({ imageUrls }: ImageSliderProps) {
  const [imageIndex, setImageIndex] = useState(0);

  function showNextImage() {
    setImageIndex(index => {
      if (index === imageUrls.length - 1) return 0;
      return index + 1;
    })
  }

  function showPrevImage() {
    setImageIndex(index => {
      if (index === 0) return imageUrls.length - 1;
      return index - 1;
    })
  }

  return (
    <div className="w-full flex flex-col">
      <div className='flex flex-row w-full h-screen overflow-hidden'>
        {imageUrls.map((url) => (
            <img key={url} className="shrink-0 grow-0 w-full h-full block duration-300 ease-in-out" style={{translate: `${-100 * imageIndex}%`}} src={url} alt=""/>
        ))}
      </div>
      <div className='self-center'>
        <button onClick={showPrevImage} className="hover:bg-white duration-[100ms] ease-in-out"><img src="/btn/arrow-btn_left.png" alt="" /></button>
        <button onClick={showNextImage} className="hover:bg-white duration-[100ms] ease-in-out"><img src="/btn/arrow-btn_right.png" alt="" /></button>
      </div>
      <div className='absolute bottom-[0.5rem] left-[50%] translate-[-50%] flex gap-[.25rem]'>
        {imageUrls.map((_, index) => (
          <button key={index} className='w-10 h-10 text-3xl' onClick={() => setImageIndex(index)}>{index}</button>
        ))}
      </div>

    </div>
  )
}

export default SlideShow