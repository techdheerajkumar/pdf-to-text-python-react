import {Route, Routes} from 'react-router-dom'
import Home from '../Pages/Home'
import Register from '../Pages/Register'
const AppRoutes = () =>{
    return (
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/register' element={<Register />}></Route>
        </Routes>
    )
}

export default AppRoutes