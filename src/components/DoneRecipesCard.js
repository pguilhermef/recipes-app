import copy from 'clipboard-copy';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import shareIcon from '../images/shareIcon.svg';
import '../styles/index.css';

export default function DoneRecipesCard(props) {
  const { image, category, recipeName, nationality, id,
    doneDate, tagName, index, alcoholic, mealOrDrink } = props;
  const [linkCopied, setLinkCopied] = useState(false);

  const shareRecipe = () => {
    const twoSeconds = 2000;
    setLinkCopied(true);
    copy(`http://localhost:3000/${mealOrDrink}s/${id}`);
    setTimeout(() => { setLinkCopied(false); }, twoSeconds);
  };

  useEffect(() => () => clearTimeout(), []);

  return (
    <section
      key={ index }
    >
      <Link to={ `/${mealOrDrink}s/${id}` }>
        <img
          className="recipe-image"
          data-testid={ `${index}-horizontal-image` }
          src={ image }
          alt={ recipeName }
        />
      </Link>

      <div>
        {
          mealOrDrink === 'meal'
            ? (
              <p
                data-testid={ `${index}-horizontal-top-text` }
              >
                {`${nationality} - ${category}`}
              </p>
            )
            : (
              <p
                data-testid={ `${index}-horizontal-top-text` }
              >
                {alcoholic}
              </p>
            )
        }
        <Link to={ `/${mealOrDrink}s/${id}` }>
          <h2
            data-testid={ `${index}-horizontal-name` }
          >
            {recipeName}
          </h2>
        </Link>
        <div>
          { tagName
              && tagName.map((tag, idx) => (
                <p
                  data-testid={ `${index}-${tag}-horizontal-tag` }
                  key={ `tag${idx}` }
                >
                  { tag }
                </p>
              ))}
        </div>
        <p
          data-testid={ `${index}-horizontal-done-date` }
        >
          { doneDate }
        </p>
        <div>
          <button
            data-testid={ `${index}-horizontal-share-btn` }
            type="button"
            src={ shareIcon }
            onClick={ shareRecipe }
          >
            <img src={ shareIcon } alt="share icon" />
          </button>
          { linkCopied && <p>Link copied!</p> }
        </div>
      </div>
    </section>
  );
}

DoneRecipesCard.propTypes = {
  image: PropTypes.string,
  category: PropTypes.string,
  recipeName: PropTypes.string,
  finishedData: PropTypes.string,
  tagName: PropTypes.string,
  index: PropTypes.number,
  nationality: PropTypes.string,
}.isRequired;
