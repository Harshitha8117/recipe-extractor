def merge_shopping_lists(recipes):
    merged = {}

    for recipe in recipes:
        shopping = recipe.get("shopping_list", {})

        for category, items in shopping.items():
            if category not in merged:
                merged[category] = []

            merged[category].extend(items)

    return merged