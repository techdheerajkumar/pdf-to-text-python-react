import {Route, Routes} from 'react-router-dom'
import Home from '../Pages/Home'
import Register from '../Pages/Register'
import LoginUser from '../components/LoginUserForm/LoginUser'
import UserDashboard from '../Pages/Dashboard'
const AppRoutes = () =>{
    return (
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/login' element={<LoginUser />}></Route>
            <Route path='/register' element={<Register />}></Route>
            <Route path='/dashboard' element={<UserDashboard />}></Route>
        </Routes>
    )
}

export default AppRoutes