from pydantic import BaseModel, Field, EmailStr
from time import time
class User_Schema(BaseModel):
    id: int  = Field(default_factory=lambda: int(time() * 1000))
    firstName: str = Field(
        min_length=3, max_length=64
    )
    lastName: str = Field(
        min_length=3, max_length=64
    )
    email: EmailStr
    password: str = Field(
        min_length=6, max_length=64
    )

class User_Response_Schema(BaseModel):
    firstName: str
    lastName: str
    email: str
    password: str