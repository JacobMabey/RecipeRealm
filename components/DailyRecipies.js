//these will hold the temp images
BreakfeastImages = [];
LunchImages = [];
DinnerImages = [];
DessertImages = [];
// these will object refs to recpies holding the temp data
Breakfeast = [];
Lunch = [];
Dinner = [];
Dessert = [];



//these should be the basic for the images 
function getBreakfeastImage (entry)
{
    return BreakfeastImages[entry];
}
function addBreakfeastImage (item)
{
    BreakfeastImages.Push(item);
}

function getLunchImage (entry)
{
    return LunchImages[entry];
}
function addLuchImage (item)
{
    LunchImages.Push(item);
}

function getDinnerImage (entry)
{
    return DinnerImages[entry];
}
function addDinnerImage (item)
{
    DinnerImages.Push(item);
}

function getDessertImage (entry)
{
    return DessertImages[entry];
}
function addDessertImage (item)
{
    DessertImages.Push(item);
}

// Passes actual recipie data into a temp array
function getBreakfeastItem (entry)
{
    return Breakfeast[entry];
}
function addBreakfeastItem (recipieName, calorieCount, instruction, utinciels, timeEst, nutrientionalWarnings, ingredient)
{
    const recipeData = {
        _RecipeName: recipieName,
        _CalorieCount: calorieCount,
        _Instruction: instruction,
        _Utinciels: utinciels,
        _TimeEst: timeEst,
        _NutrientionalWarnings: nutrientionalWarnings,
        _Ingredients: ingredient
    };
    Breakfeast.Push(recipeData);
}

function getLunchItem (entry)
{
    return Lunch[entry];
}
function addLuchItem (recipieName, calorieCount, instruction, utinciels, timeEst, nutrientionalWarnings, ingredient)
{
    const recipeData = {
        _RecipeName: recipieName,
        _CalorieCount: calorieCount,
        _Instruction: instruction,
        _Utinciels: utinciels,
        _TimeEst: timeEst,
        _NutrientionalWarnings: nutrientionalWarnings,
        _Ingredients: ingredient
    };
    Lunch.Push(recipeData);
}

function getDinnerItem (entry)
{
    return Dinner[entry];
}
function addDinnerItem (recipieName, calorieCount, instruction, utinciels, timeEst, nutrientionalWarnings, ingredient)
{
    const recipeData = {
        _RecipeName: recipieName,
        _CalorieCount: calorieCount,
        _Instruction: instruction,
        _Utinciels: utinciels,
        _TimeEst: timeEst,
        _NutrientionalWarnings: nutrientionalWarnings,
        _Ingredients: ingredient
    };
    Dinner.Push(recipeData);
}

function getDessertItem (entry)
{
    return Dessert[entry];
}
function addDessertItem (recipieName, calorieCount, instruction, utinciels, timeEst, nutrientionalWarnings, ingredient)
{
    const recipeData = {
        _RecipeName: recipieName,
        _CalorieCount: calorieCount,
        _Instruction: instruction,
        _Utinciels: utinciels,
        _TimeEst: timeEst,
        _NutrientionalWarnings: nutrientionalWarnings,
        _Ingredients: ingredient
    };
    Breakfeast.Push(recipeData);
}