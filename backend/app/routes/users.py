from fastapi import APIRouter
from schemas.user_schema import User_Schema
from schemas.user_schema import User_Response_Schema
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
    new_user = User_Schema(**user.model_dump())
    users.append(new_user)
    return user