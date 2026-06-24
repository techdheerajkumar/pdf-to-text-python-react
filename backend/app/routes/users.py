from fastapi import APIRouter, HTTPException
from schemas.user_schema import User_Schema
from schemas.user_schema import User_Response_Schema
from schemas.user_schema import User_login_schema
from security.utils.security import hash_password
from security.utils.security import verify_password
user_router  = APIRouter()


users:list[User_Schema] = []
@user_router.get('/user/users-list')
def all_users():
    return users


@user_router.post('/user/login')
def login_page(user:User_login_schema):
    
    for existing_user in users:
        if existing_user.email == user.email:
            is_password_true = verify_password(user.password, existing_user.password)
            if is_password_true:
                return {"message": "Login Successful!!"}
            return {"message": "Invalid credentials"}
            
   
    return {"message": "Invalid credentials"}


@user_router.post('/user/register')
def register_user(user:User_Response_Schema):
    user_data = user.model_dump()
    user_data['password'] = hash_password(user_data['password']);
    print(user_data)
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