from fastapi import APIRouter, HTTPException, Depends
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from schemas.user_schema import User_Schema
from schemas.user_schema import User_Create_Schema
from schemas.user_schema import User_login_schema
from security.utils.security import hash_password
from security.utils.security import verify_password
from auth.jwt_handler import create_access_token
from auth.jwt_handler import verify_access_token
from sqlalchemy import select
from sqlalchemy.orm import Session
from database.database import get_db
from database.models import User
user_router  = APIRouter()
security = HTTPBearer()

users:User
@user_router.get('/user/users-list')
def all_users():
    return users


@user_router.post('/user/login')
def login_page(user:User_login_schema):
    
    for existing_user in users:
        if existing_user.email == user.email:
            is_password_true = verify_password(user.password, existing_user.password)
            if is_password_true:
                token = create_access_token(
                    existing_user.id, existing_user.email, existing_user.firstName
                )
                return{
                    "message": "Login Successful!",
                    "access_token": token,
                    "token_type": "Bearer"
                }
            raise HTTPException(
                status_code=401,
                detail="Invalid Credentials"
            )
   
    raise HTTPException(
        status_code=401,
        detail="Invalid Credentials"
    )


@user_router.post('/user/register')
def register_user(user:User_Create_Schema, db: Session = Depends(get_db)):
    user_data = user.model_dump()
    user_data['password'] = hash_password(user_data['password']);
    new_user = User(**user_data)
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    return {
        "message": "User registered successfully!"
    }


@user_router.get('/user/me')
def get_logged_in_user(credentials:HTTPAuthorizationCredentials =  Depends(security)):
    token = credentials.credentials
    payload = verify_access_token(token)
    return payload
    