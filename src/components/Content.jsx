import React from 'react'
import VideoCard from './VideoCard'

function Content() {
  return (
    <section className='text-white bg-yellow-300 col-span-10'>
        <div className='grid grid-cols-6 gap-3'>
        <VideoCard/>
        <VideoCard/>
        <VideoCard/>
        <VideoCard/>
        <VideoCard/>
        <VideoCard/>
        </div>
    </section>
  )
}

export default Content