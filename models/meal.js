class Meal {
  constructor(
    id,
    categoryIds,
    title,
    imageUrl,
    duration,
    ingredients,
    steps,
    tricks,
    complexity,
   
  ) {
    this.id = id;
    this.categoryIds = categoryIds;
    this.title = title;
    this.imageUrl = imageUrl;
    this.ingredients = ingredients;
    this.steps = steps;
    this.duration = duration;
    this.tricks = tricks;
    this.complexity = complexity;
 
  }
}

export default Meal;
