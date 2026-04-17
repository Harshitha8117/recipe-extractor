from pydantic import BaseModel
from typing import List, Dict

class Ingredient(BaseModel):
    quantity: str
    unit: str
    item: str

class Nutrition(BaseModel):
    calories: int
    protein: str
    carbs: str
    fat: str

class RecipeSchema(BaseModel):
    title: str
    cuisine: str
    ingredients: List[Ingredient]
    instructions: List[str]
    nutrition_estimate: Nutrition