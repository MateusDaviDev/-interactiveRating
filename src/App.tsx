import React from 'react'
import {Home} from './pages/Home'
import GlobalStyle from './GlobalStyle'
import RattingCard from './pages/Ratting-card'
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import MyContext from './contexts/myContext'
function App() {
  const [RatingNote,SetRatingNote] = React.useState(0)

  return (
    <BrowserRouter>
      <GlobalStyle/>
      <MyContext.Provider value={{RatingNote,SetRatingNote}}>
        <Routes>
          <Route  path='/' element={<Home/>}/>
          <Route path='/ratting' element={<RattingCard />}/>
        </Routes>
      </MyContext.Provider>
     
    </BrowserRouter>
  )
}

export default App
