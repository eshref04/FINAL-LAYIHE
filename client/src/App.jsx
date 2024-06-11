import { useContext, useState } from 'react'
import './App.scss'
import MainContext from './context/Context'
import ROUTES from './routes/Routes'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";



function App() {
  const router = createBrowserRouter(ROUTES)
  const [data,setData] = useState([])
  const contextData={
    data,setData
  }

  return (
    
      <>
      <MainContext.Provider value={contextData}>
      <HelmetProvider>
      <RouterProvider router={router}/>
      </HelmetProvider>
     </MainContext.Provider>
      </>
  )
}

export default App
