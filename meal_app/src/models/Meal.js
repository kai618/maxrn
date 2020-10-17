export default class Meal {
    /**
     *
     * @param {string} id
     * @param {string[]} categoryIds
     * @param {string} title
     * @param {string} affordability
     * @param {string} complexity
     * @param {string} imageUrl
     * @param {number} duration
     * @param {string[]} ingredients
     * @param {string[]} steps
     * @param {boolean} isGlutenFree
     * @param {boolean} isVegan
     * @param {boolean} isVegetarian
     * @param {boolean} isLactoseFree
     */
    constructor(
        id,
        categoryIds,
        title,
        affordability,
        complexity,
        imageUrl,
        duration,
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
        this.imageUrl = imageUrl
        this.duration = duration
        this.ingredients = ingredients
        this.steps = steps
        this.isGlutenFree = isGlutenFree
        this.isVegan = isVegan
        this.isVegetarian = isVegetarian
        this.isLactoseFre = isLactoseFree
    }
}
