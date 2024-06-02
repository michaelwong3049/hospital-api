import { BrowserRouter, Routes, Route } from 'react-router-dom'

//pages
import Home from '../pages/Home'
import Update from '../pages/Update'
import Delete from '../pages/Delete'
import Create from '../pages/Create'

//components
import Navbar from '../components/Navbar'

function App() {
  return(
    <div className="App">
        <BrowserRouter>
        <Navbar/>
            <div className="pages">
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/Update" element={<Update />} />
                    <Route path="Create" element={<Create />} />
                    <Route path="/Delete" element={<Delete />} />
                </Routes>
            </div>
        </BrowserRouter>
    </div>
  );
}

export default App;