// KEY'S LOCAL STORAGE
export const USER_KEY = 'user';
export const MEALS_KEY = 'mealsToken';
export const DRINKS_KEY = 'drinksToken';
export const DONE_KEY = 'doneRecipes';
export const IN_PROGRESSES_RECIPES_KEY = 'inProgressRecipes';
export const FAVORITES_KEY = 'favoriteRecipes';

export const INITIAL_PROGRESSES = { drinks: { }, meals: {} };
// LOGIN PAGE
export const MIN_CHARACTERS = 7;
export const EMAIL_INPUT_TESTID = 'email-input';
export const PASSWORD_INPUT_TESTID = 'password-input';
export const LOGIN_BUTTON_TESTID = 'login-submit-btn';

export const VALID_EMAIL = 'goku@eusou.com';
export const VALID_PASS = '1234567';

export const INVALID_EMAIL = 'souumemailinvalido';
export const INVALID_PASS = '12345';

// PATH NAMES
export const LOGIN_PATH = '/';
export const MEALS_PATH = '/meals';
export const DRINKS_PATH = '/drinks';
export const PROFILE_PATH = '/profile';
export const MEALS_IN_PROGRESS_PATH = '/meals/:id/in-progress';
export const DRINKS_IN_PROGRESS_PATH = '/drinks/:id/in-progress';
export const DONE_RECIPES_PATH = '/done-recipes';
export const FAVORITES_PATH = '/favorite-recipes';
export const MEALS_RECIPES_PATH = '/meals/:id';
export const DRINKS_RECIPES_PATH = '/drinks/:id';

// SEARCH BAR COMPONENT
export const ALERT_FIRSTLETTER_INVALID = 'Your search must have only 1 (one) character';

export const INGREDIENT_SEARCH_TESTID = 'ingredient-search-radio';
export const NAME_SEARCH_TESTID = 'name-search-radio';
export const FIRST_LETTER_SEARCH_TESTID = 'first-letter-search-radio';
export const BTN_SEARCH_EXEC_TESTID = 'exec-search-btn';
export const SEARCH_TESTID = 'search-input';

export const INGREDIENT_VALUE = 'ingredient';
export const NAME_VALUE = 'name';
export const FIRST_LETTER_VALUE = 'first-letter';

// HEADER COMPONENT
export const PROFILE_TOP_BTN = 'profile-top-btn';
export const SEARCH_TOP_BTN = 'search-top-btn';
export const TITLE_HEADER_TESTID = 'page-title';

// RECIPES LIMIT
export const RECIPES_LIMIT = 12;
// CATEGORIES LIMIT
export const CATEGORIES_LIMIT = 5;

export const RECOMMENDED_LIMIT = 6;

export const ALERT_MSG = 'Sorry, we haven\'t found any recipes for these filters.';

// ENDPOINTS
export const MEALS_ENDPOINT = 'www.themealdb.com';
export const DRINKS_ENDPOINT = 'www.thecocktaildb.com';

// YOUTUBE SHENANIGANS
export const MINUS_WATCH = 'watch?v=';
export const PLUS_EMBED = 'embed/';

// RECIPE DETAILS TEST IDS
export const FAVORITE_BTN_TESTID = 'favorite-btn';
export const SHARE_BTN_TESTID = 'share-btn';
export const RECIPE_PHOTO_TESTID = 'recipe-photo';
export const RECIPE_TITLE_TESTID = 'recipe-title';
export const RECIPE_CATEGORY_TESTID = 'recipe-category';
export const FIRST_INGREDIENT_MEASURE_TESTID = '0-ingredient-name-and-measure';
export const ALL_INGREDIENTS_MEASURES_TESTIDS = /ingredient-name-and-measure/i;
export const INGREDIENTS_LENGTH8 = 8;
export const INGREDIENTS_LENGTH = 16;
export const AQUAMARINE_INGREDIENTS_LENGTH3 = 3;
export const AQUAMARINE_INGREDIENTS_LENGTH = 6;
export const INSTRUCTIONS_TESTID = 'instructions';
export const VIDEO_TESTID = 'video';
export const RECO_CARD_TESTID = '0-recommendation-card';
export const ALL_RECO_IMGS_TESTIDS = /card-img/i;
export const RECO_IMGS_LENGTH = 6;
export const RECO_TITLE_TESTID = '0-recommendation-title';
export const START_RECIPE_BTN_TESTID = 'start-recipe-btn';
export const FIRST_INGRED_MEAS_TESTID_IN_PROGRESS = '0-ingredient-step';
export const ALL_INGRED_MEAS_STEP_TESTID_IN_PROGRESS = /ingredient-step/i;
export const FINISH_RECIPE_BTN_TESTID = 'finish-recipe-btn';

export const MEALS_ARRABIATA_PATH = '/meals/52771';
export const DRINKS_AQUAMARINE_PATH = '/drinks/178319';
