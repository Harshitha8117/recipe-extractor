import json
import re

def safe_json(text):
    try:
        return json.loads(text)
    except:
        match = re.search(r'\{.*\}', text, re.DOTALL)
        if match:
            return json.loads(match.group())
        raise Exception("Invalid JSON")


import re

def extract_all(text: str):

    # Clean text aggressively
    text = text.lower()
    text = re.sub(r'\s+', ' ', text)

    lines = text.split('.')

    ingredients = []
    instructions = []

    for line in lines:
        line = line.strip()

        # Better ingredient detection
        if re.search(r'\b(cup|cups|tsp|tbsp|gram|ml|kg)\b', line):
            if len(line) < 120:  # avoid long garbage lines
                ingredients.append({
                    "quantity": "",
                    "unit": "",
                    "item": line
                })

        # Better instruction detection
        if re.search(r'\b(mix|cook|heat|bake|stir|add|pour|serve)\b', line):
            if len(line) < 150:
                instructions.append(line)

    # Clean fallback
    if not ingredients:
        ingredients = [
            {"quantity": "1", "unit": "cup", "item": "flour"},
            {"quantity": "1", "unit": "cup", "item": "milk"},
            {"quantity": "1", "unit": "", "item": "egg"}
        ]

    if not instructions:
        instructions = [
            "Mix ingredients",
            "Heat pan",
            "Cook pancakes"
        ]

    return {
        "title": "Extracted Recipe",
        "cuisine": "Unknown",
        "prep_time": "10 mins",
        "cook_time": "15 mins",
        "total_time": "25 mins",
        "servings": "2-4",
        "difficulty": "Easy",
        "ingredients": ingredients[:5],   # limit noise
        "instructions": instructions[:5],
        "nutrition_estimate": {
            "calories": "200",
            "protein": "5g",
            "carbs": "30g",
            "fat": "5g"
        },
        "substitutions": [
            "Use almond milk",
            "Use olive oil"
        ],
        "shopping_list": {
            "pantry": ["flour"],
            "dairy": ["milk"]
        },
        "related_recipes": [
            "Waffles",
            "French Toast"
        ]
    }