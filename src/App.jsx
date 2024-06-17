import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home'
import History from './Pages/History'
import Footer from './components/Footer'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/history',
    element: <History />
  },
])



function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Footer />
    </>
  )
}

export default App

// important links:

// https://disease.sh/v3/covid-19/historical/all?lastdays=all
// https://disease.sh/v3/covid-19/historical/all?lastdays=all
// https://disease.sh/v3/covid-19/historical/all?lastdays=10
// https://disease.sh/v3/covid-19/historical