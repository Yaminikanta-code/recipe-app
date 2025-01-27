function Extraction(apiResponse) {
  const rows = apiResponse.data.map((recipe) => [
    recipe.title,
    recipe.description,
    recipe.ingredients.map((ing) => ing.name).join(", "),
    recipe.steps.join(", "),
    `${recipe.prepTime} mins`,
    recipe.ratings.length > 0
      ? (
          recipe.ratings.reduce((acc, r) => acc + r, 0) / recipe.ratings.length
        ).toFixed(1)
      : "No ratings",
  ]);

  return rows;
}

const headers = [
  "Title",
  "Description",
  "Ingredients",
  "Steps",
  "Prep Time",
  "Avg Rating",
  "Actions",
];

export { Extraction, headers };
