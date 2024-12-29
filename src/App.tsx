// import Index from "./components/hero"
import ProductPage from "./pages/ProductPage"
import HomePage from "./pages/HomePage"
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/product/:id' element={<ProductPage/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
