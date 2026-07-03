import { useEffect, useState } from 'react';
import UserService from '../services/userService'

const UserDashboard = () => {
    const [user, setUser] = useState('');
    const fetchUser = async () => {
        try {
            await UserService.getUser().then(data => {
                setUser(data)
            })
        } catch (err) {
            console.log(err)
        }

    }
    useEffect(() => {
        fetchUser()
    }, [])

    return (
        <>
            <h1>User Dashboard</h1>
            {user && (
                <h1>Welcome {user.first_name}!</h1>
            )}

        </>
    )
}

export default UserDashboard;