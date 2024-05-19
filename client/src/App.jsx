import { useState } from 'react'
import { Routes,Route } from 'react-router-dom'
import { Homepage,Login,Signup,AddMember,Genealogy } from './pages'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      {/* <Route path='/' element={<Homepage/>}/> */}
      <Route path='/login' element={<Login/>}/>
      <Route path='/Signup' element={<Signup/>}/>
      <Route path='/AddMember' element={<AddMember/>}/>
      <Route path='/Genealogy' element={<Genealogy/>}/>
    </Routes>
    </>
  )
}

export default App
