// these will object refs to recpies holding the data before send off (might not need it, after database is set up)
Breakfeast = [];
Lunch = [];
Dinner = [];
Dessert = [];



// Passes actual recipie data into a temp array
function getBreakfeastItem (entry)
{
    return Breakfeast[entry];
}
function addBreakfeastFav (recipieName, calorieCount, instruction, utinciels, timeEst, nutrientionalWarnings, ingredient, Image)
{
    const recipeData = {
        _RecipeName: recipieName,
        _CalorieCount: calorieCount,
        _Instruction: instruction,
        _Utinciels: utinciels,
        _TimeEst: timeEst,
        _NutrientionalWarnings: nutrientionalWarnings,
        _Ingredients: ingredient,
        _Image: Image
    };
    Breakfeast.Push(recipeData);
}

function getLunchItem (entry)
{
    return Lunch[entry];
}
function addLuchItem (recipieName, calorieCount, instruction, utinciels, timeEst, nutrientionalWarnings, ingredient, Image)
{
    const recipeData = {
        _RecipeName: recipieName,
        _CalorieCount: calorieCount,
        _Instruction: instruction,
        _Utinciels: utinciels,
        _TimeEst: timeEst,
        _NutrientionalWarnings: nutrientionalWarnings,
        _Ingredients: ingredient,
        _Image: Image
    };
    Lunch.Push(recipeData);
}

function getDinnerItem (entry)
{
    return Dinner[entry];
}
function addDinnerItem (recipieName, calorieCount, instruction, utinciels, timeEst, nutrientionalWarnings, ingredient,Image)
{
    const recipeData = {
        _RecipeName: recipieName,
        _CalorieCount: calorieCount,
        _Instruction: instruction,
        _Utinciels: utinciels,
        _TimeEst: timeEst,
        _NutrientionalWarnings: nutrientionalWarnings,
        _Ingredients: ingredient,
        _Image: Image
    };
    Dinner.Push(recipeData);
}

function getDessertItem (entry)
{
    return Dessert[entry];
}
function addDessertItem (recipieName, calorieCount, instruction, utinciels, timeEst, nutrientionalWarnings, ingredient, Image)
{
    const recipeData = {
        _RecipeName: recipieName,
        _CalorieCount: calorieCount,
        _Instruction: instruction,
        _Utinciels: utinciels,
        _TimeEst: timeEst,
        _NutrientionalWarnings: nutrientionalWarnings,
        _Ingredients: ingredient,
        _Image: Image
    };
    Breakfeast.Push(recipeData);
}