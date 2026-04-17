from sqlalchemy import Column, Integer, String, JSON, DateTime
from datetime import datetime
from app.db.database import Base

class Recipe(Base):
    __tablename__ = "recipes"

    id = Column(Integer, primary_key=True, index=True)
    url = Column(String)
    data = Column(JSON)
    created_at = Column(DateTime, default=datetime.utcnow)