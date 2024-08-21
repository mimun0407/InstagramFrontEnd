import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './component/login/login'
import Register from './component/register/register'
function App() {

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/login' element={<Login />}></Route>
                    <Route path='/signup' element={<Register/>}></Route>
                </Routes>
            </BrowserRouter>

        </div>
    )
}
export default App