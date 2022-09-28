export default function DrinksRecipes({ value }) {
  console.log(value);
  if (value) {
    return (
      value && (
        <main>
          <div>
            <img
              alt={ value.strMeal }
              src={ value.strMealThumb }
              data-testid="recipe-photo"
            />
          </div>
          <div>
            <div data-testid="recipe-title">{ value.strMeal }</div>
            <div data-testid="recipe-category">{ value.strCategory }</div>
            <span>{ value.strAlcoholic }</span>
          </div>
          <div>
            <h3>Igredientes</h3>
            map dos igredientes aqui
          </div>
          <div>
            <h3 data-testid="instructions">{ value.strInstructions }</h3>
            map dos igredientes aqui
          </div>
        </main>)
    );
  }
}
