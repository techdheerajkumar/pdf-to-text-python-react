from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column
from sqlalchemy import BigInteger, String
class Base(DeclarativeBase):
    pass

class User(Base):
    __tablename__ = "users"

    id: Mapped[int] = mapped_column(BigInteger,primary_key=True, autoincrement=True)

    firstName : Mapped[str] = mapped_column("first_name",String(50))
    lastName : Mapped[str] = mapped_column("last_name",String(50))
    email : Mapped[str] = mapped_column("email",String(255), unique=True)
    password : Mapped[str] = mapped_column("password",String(255))