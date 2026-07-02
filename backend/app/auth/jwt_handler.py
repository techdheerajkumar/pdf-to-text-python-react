import jwt
from datetime import datetime, timedelta, timezone
from jwt import ExpiredSignatureError, InvalidTokenError
from fastapi import HTTPException

SECRET_KEY = "my-secret-key"

ALGORITHM = "HS256"

ACCESS_TOKEN_EXPIRE_MINUTES = 30

def create_access_token(user_id:str, email:str):

    payload = {
        "user_id": user_id,
        "email": email,
        "exp": datetime.now(timezone.utc) + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    }

    token = jwt.encode(
        payload,
        SECRET_KEY,
        algorithms=ALGORITHM
    )

    return token

def verify_access_token(token:str):
    try:
        payload = jwt.decode(
            token,
            SECRET_KEY,
            algorithms=[ALGORITHM]
        )

        return payload
    
    except ExpiredSignatureError:
        raise HTTPException(
            status_code=401,
            detail="Token has expired"
        )
    
    except InvalidTokenError:
        raise HTTPException(
            status_code=401,
            detail="Invalid token"
        )