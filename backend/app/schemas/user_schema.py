from pydantic import BaseModel, Field, EmailStr, field_validator
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
    @field_validator('email')
    @classmethod
    def to_lower(cls, v:str) -> str:
        return v.lower().strip()
    
    password: str = Field(
        min_length=6, max_length=64, description="Must be between 6 and 64 characters"
    )
    
    @field_validator('firstName', 'lastName')
    @classmethod
    def trim_value(cls, v:str) -> str:
        return v.strip()

class User_Create_Schema(BaseModel):
    firstName: str 
    lastName: str
    email: str
    password: str

class User_login_schema(BaseModel):
    email: str
    password: str