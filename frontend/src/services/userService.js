import API_BASE_URL from "../configs/api";


const getUsersAPI = async () =>{
    const getUser = await fetch(`${API_BASE_URL}/login`);
    const message = await getUser.json();
    return message
}

export default getUsersAPI