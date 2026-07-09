from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column
from sqlalchemy import BigInteger, String
class Base(DeclarativeBase):
    pass

class User(Base):
    __tablename__ = "users"

    id: Mapped[int] = mapped_column(BigInteger,primary_key=True)

    first_name : Mapped[str] = mapped_column(String(50))
    last_name : Mapped[str] = mapped_column(String(50))
    email : Mapped[str] = mapped_column(String(255), unique=True)
    password : Mapped[str] = mapped_column(String(255))