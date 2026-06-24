from fastapi import APIRouter, HTTPException
from schemas.user_schema import User_Schema
from schemas.user_schema import User_Response_Schema
from security.utils.security import hash_password
user_router  = APIRouter()


users:list[User_Schema] = []
@user_router.get('/user/users-list')
def all_users():
    return users


@user_router.get('/user/login')
def login_page():
    return {"message": "Please login to continue"}


@user_router.post('/user/register')
def register_user(user:User_Response_Schema):
    user_data = user.model_dump()
    user_data['password'] = hash_password(user_data['password']);
    print(user_data)
    # print(**user_data['firstName'])
    new_user = User_Schema(**user_data)
    for user in users:
        if user.email == new_user.email:
            raise HTTPException(
                status_code=409,
                detail="Email already exists"
            )
        
    users.append(new_user)
    return {
        "message": "User registered successfully!"
    }