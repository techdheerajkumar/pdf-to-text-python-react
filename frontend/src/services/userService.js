import API_BASE_URL from "../configs/api";


const getUsersAPI = async () =>{
    const getUser = await fetch(`${API_BASE_URL}/user/users-list`);
    const message = await getUser.json();
    return message
}

const postUserInfo = async (userData) =>{
    const response = await fetch(`${API_BASE_URL}/user/register`, {
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body: JSON.stringify(userData)
    })
    

    if(!response.ok){
      await response.json().then(err => console.log(err.detail))
    }

    return response.json()
}
export default { getUsersAPI, postUserInfo }