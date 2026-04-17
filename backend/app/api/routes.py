from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

from app.services.scraper import scrape_website
from app.services.parser import clean_text
from app.services.llm_service import extract_all
from app.db.crud import save_recipe, get_all_recipes

router = APIRouter()

class URLRequest(BaseModel):
    url: str

@router.post("/extract")
async def extract_recipe(req: URLRequest):
    try:
        raw = scrape_website(req.url)
        clean = clean_text(raw)
        structured = extract_all(clean)
        saved = save_recipe(req.url, structured)
        return saved
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@router.get("/recipes")
def recipes():
    return get_all_recipes()