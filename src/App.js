import React from 'react'
import Create from './Create'
import {BrowserRouter , Routes , Route, HashRouter} from 'react-router-dom'
import Read from './Read'
import Update from './Update'



const App = () => {
  return (
    
        <HashRouter basename='/'>
        <div className="main">
        <Routes>
              <Route exact path='/' element= {<Create/> }/>
              <Route exact path='/read' element= {<Read/> }/>
              <Route exact path ='/update' element = {<Update/>}/>
              


           </Routes>
        </div>
           
        
        
        </HashRouter>
    
  )
}

export default App

