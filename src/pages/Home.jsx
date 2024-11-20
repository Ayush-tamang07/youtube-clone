import React from 'react'
import Header from '../components/Header'
// import VideoCard from '../components/VideoCard'
import SideBar from '../components/SideBar'
import Content from '../components/Content'

function Home() {
  return (
    <main className=''> 
        <Header/>
        <div className='grid grid-cols-12'>
        <SideBar/>
        <Content/>

        </div>

    </main>
  )
}

export default Home