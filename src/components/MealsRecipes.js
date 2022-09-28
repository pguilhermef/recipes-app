export default function MealsRecipes({ value }) {
  console.log(value);
  if (value) {
    return (
      value && (
        value.map((item) => (
          <main key={ item.strMeal }>
            <div>
              <img
                alt={ item.strMeal }
                src={ item.strMealThumb }
                data-testid="recipe-photo"
              />
            </div>
            <div>
              <div data-testid="recipe-title">{item.strMeal}</div>
              <div data-testid="recipe-category">{item.strCategory}</div>
            </div>
            <div>
              <h3>Igredientes</h3>
              map dos igredientes aqui
            </div>
            <div>
              <h3 data-testid="instructions">{item.strInstructions}</h3>
              map dos igredientes aqui
            </div>
            <iframe
              width="863"
              height="315"
              src={ item.strYoutube }
              title="The Art of Making Burek"
              frameBorder="0"

            />
          </main>)))
    );
  }
}
