import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import MyNav from "../components/MyNav"
import History from "../components/History"
import Mission from "../components/Mission"
import Location from "../components/Location"
import Home from './Home.jsx'
import Announcement from './Announcement.jsx'
import LectureNotes from './LectureNotes.jsx'
import Result from '../Result.jsx'
import Admission from './Admission.jsx'
import ErrorPage from './ErrorPage'




function AllinOne() {
  return (


<div>
<BrowserRouter>
<MyNav />


<Routes>
<Route path='/' element={<Home />}/>

<Route path='/history' element={<History />}/>
<Route path='/mission' element={<Mission />}/>
<Route path='/location' element={<Location />} />
<Route path='/announcement' element={ <Announcement /> } />
<Route path='/lecturenotes' element={ <LectureNotes /> } />
<Route path='/result' element={ <Result /> } />
<Route path='/admission' element={ <Admission /> } />
<Route path='*' element={ <ErrorPage /> } />


</Routes>


</BrowserRouter>


</div>


   
   
  )
}

export default AllinOne