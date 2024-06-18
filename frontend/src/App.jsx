import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'

//pages
import Home from '../pages/Home'
import ChoosePatient from '../pages/ChoosePatient'
import Delete from '../pages/Delete'
import Create from '../pages/Create'
import Success from '../pages/Success'
import Update from '../pages/Update'

//components
import Navbar from '../components/Navbar'

function App() {
  const [data, setData] = useState('');
  const [name, setName] = useState('');

  return(
    <div className="App">
        <BrowserRouter>
        <Navbar/>
            <div className="pages">
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/ChoosePatient" element={<ChoosePatient setData={setData} setName={setName}/>} />
                    <Route path='/Update' element={<Update data={data} name={name}/>} />
                    <Route path="Create" element={<Create />} />  
                    <Route path="/Delete" element={<Delete />} />
                    <Route path="/Success" element={<Success />} />
                </Routes>
            </div>
        </BrowserRouter>
    </div>
  );
}

export default App;