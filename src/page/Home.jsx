import React, { useContext } from 'react'
import { Footer } from '../componets/Footer'
import Header from '../componets/Header'
import MovieList from '../componets/MovieList'
import Sideber from '../componets/Sideber'
import { ThemeContext } from '../context'

const Home = () => {
    const {them} = useContext(ThemeContext)
  return (
    <div className={`w-full h-full ${them ? "dark" : " "} `} >
     <Header />
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <Sideber />
          <MovieList />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Home