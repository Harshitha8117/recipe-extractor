from app.db.database import SessionLocal
from app.db.models import Recipe

def save_recipe(url: str, data: dict):
    db = SessionLocal()

    recipe = Recipe(url=url, data=data)
    db.add(recipe)
    db.commit()
    db.refresh(recipe)

    db.close()

    return {
        "id": recipe.id,
        "url": recipe.url,
        "data": recipe.data
    }


def get_all_recipes():
    db = SessionLocal()
    recipes = db.query(Recipe).all()
    db.close()

    return [
        {
            "id": r.id,
            "url": r.url,
            "data": r.data,
            "created_at": str(r.created_at)
        }
        for r in recipes
    ]