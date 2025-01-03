import {   RouterProvider } from 'react-router'
import './App.css'
import router from './router/Router'


function App() {
  
  return (
  // <BrowserRouter>
  // <Routes>
  //   <Route path='/' element={<Home/>}/>
  //   <Route path='/about' element={<About/>}/>
  //   <Route path='/components/login' element={<Login/>}/>
  //   <Route path='/components/header' element={<Header/>}/>
  //   <Route path='*' element={<Error/>}/>
  // </Routes>
  // </BrowserRouter>

   <RouterProvider router={router}/>

  )
}

export default App
