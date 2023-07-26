import {BrowserRouter,Route,Routes} from "react-router-dom";
import MainPage from './pages/MainPage'
import Header from "./components/Header";
import './App.css'
import MovieDetail from "./pages/MovieDetail"
function App() {

  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<MainPage/>} />
      {/* router dom'da url deki değişken kısım için : kullanılır. */}
      <Route path="/movie/:movie_id" element={<MovieDetail/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
