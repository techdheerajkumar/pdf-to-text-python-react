from fastapi import APIRouter

user_router  = APIRouter()

@user_router.get('/login')
def login_page():
    return {"message": "Please login to continue"}