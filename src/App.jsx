import './App.css'
import Home from './components/Home'
import { Routes, Route } from 'react-router-dom'
import Video from './components/Video'
import First from './components/First'
import Second from './components/Second'
import Third from './components/Third'
import Fourth from './components/Fourth'
import Fifth from './components/Fifth'

function App() {

  return (
    <Routes>
              <Route path="/" element={<First />}/>
              <Route path="/second" element={<Second />}/>
              <Route path="/third" element={<Third />}/>
              <Route path="/fourth" element={<Fourth />}/>
              <Route path="/fifth" element={<Fifth/>}/> 
              <Route path="/home" element={<Home />}/>
              <Route path="/video" element={<Video />}/> 
    </Routes>
  )
}

export default App
