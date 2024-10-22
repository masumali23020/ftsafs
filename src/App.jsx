import './App.css'
import Header from './componets/Header'
import MovieList from './componets/MovieList'
import Sideber from './componets/Sideber'

function App() {
 

  return (
    <>
 <Header />
 <main>
 <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
  <Sideber />
  <MovieList />
  </div>
  </main>
    </>
  )
}

export default App
