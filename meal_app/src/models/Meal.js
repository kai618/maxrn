export default class Meal {
    constructor(
        id,
        categoryIds,
        title,
        affordability,
        complexity,
        duration,
        imageUrl,
        ingredients,
        steps,
        isGlutenFree,
        isVegan,
        isVegetarian,
        isLactoseFree
    ) {
        this.id = id
        this.categoryIds = categoryIds
        this.title = title
        this.affordability = affordability
        this.complexity = complexity
        this.duration = duration
        this.imageUrl = imageUrl
        this.ingredients = ingredients
        this.steps = steps
        this.isGlutenFree = isGlutenFree
        this.isVegan = isVegan
        this.isVegetarian = isVegetarian
        this.isLactoseFre = isLactoseFree
    }
}
