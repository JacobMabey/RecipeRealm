//this all feels completely wrong(I hate javaScript) do more research and come back (it was horribly wrong)

//Update these as needed 
_RecipeName = "";
_CalorieCount = 0;
_Instruction = "";
_Utinciels = "";
_TimeEst = 0;
_NutrientionalWarnings = "";
_Ingredients = "";

function getName ()
{
    return _RecipeName;
}

function setName (name)
{
    if(name !== null)
    {
        _RecipeName = name;
    }
}

function getCalorie ()
{
    return _CalorieCount;
}

function setCalorie (calories)
{
    if(calories !== null)
    {
        _CalorieCount = calories;
    }
}

function getInstruction ()
{
    return _Instruction;
}

function setInstruction (instruction)
{
    if(instruction !== null)
    {
        _Instruction = instruction;
    }
}

function getUtinciels ()
{
    return _Utinciels;
}

function setUtinciels (utinciels)
{
    if(utinciels !== null)
    {
        _Utinciels = utinciels;
    }
}

function getTime ()
{
    return _TimeEst;
}

function setTime (time)
{
    if(time !== null)
    {
        _TimeEst = time;
    }
}

function getWarnings ()
{
    return _NutrientionalWarnings;
}

function setWarnings (warnings)
{
    if(warnings !== null)
    {
        _NutrientionalWarnings = warnings;
    }
}

function getIngredients ()
{
    return _Ingredientst;
}

function setIngredients (ingredients)
{
    if(ingredients !== null)
    {
        _Ingredients = ingredients;
    }
}