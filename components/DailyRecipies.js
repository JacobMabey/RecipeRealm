import {MongoClient} from 'mongodb';
const uri = "";
const dbName = 'RecipeRealm';no
function tester()
{
    use('RecipeRealm');

    // Insert a few documents into the sales collection.
    db.getCollection('Lastest').insertMany([
        { 'item': 'abc', 'price': 10, 'quantity': 2, 'date': new Date('2014-03-01T08:00:00Z') },
        { 'item': 'jkl', 'price': 20, 'quantity': 1, 'date': new Date('2014-03-01T09:00:00Z') },
        { 'item': 'xyz', 'price': 5, 'quantity': 10, 'date': new Date('2014-03-15T09:00:00Z') },
        { 'item': 'xyz', 'price': 5, 'quantity': 20, 'date': new Date('2014-04-04T11:21:39.736Z') },
        { 'item': 'abc', 'price': 10, 'quantity': 10, 'date': new Date('2014-04-04T21:23:13.331Z') },
        { 'item': 'def', 'price': 7.5, 'quantity': 5, 'date': new Date('2015-06-04T05:08:13Z') },
        { 'item': 'def', 'price': 7.5, 'quantity': 10, 'date': new Date('2015-09-10T08:43:00Z') },
        { 'item': 'abc', 'price': 10, 'quantity': 5, 'date': new Date('2016-02-06T20:20:13Z') },
    ]);
}

// Passes actual recipie data into a temp array
function getRecipeById (Id)
{
    use('RecipeRealm');

    Id=1;

    return db.getCollection('Recipes').find({id: Id});
}
function addRecipe (id, recipieName, calorieCount, instruction, utinciels, timeEst, ingredient, mealType)
{
    use('RecipeRealm');

    id = 2;
    recipieName = 'Test';
    calorieCount = 40;
    instruction = "cook like you would one of your french girls";
    utinciels = "Spoon";
    timeEst = "40 mins",
    ingredient = "food, idiot";
    mealType = "Linner"

    // Insert a few documents into the sales collection.
    db.getCollection('Recipes').insertOne([
        { 'id': id, 'item': recipieName, 'calories': calorieCount, 'qusine': 'American', 'instructions': instruction, 'Utinciels': utinciels, 'Time': timeEst, 'ingredients': ingredient, 'meal': mealType}
    ]);
}