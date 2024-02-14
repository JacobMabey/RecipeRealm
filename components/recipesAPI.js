import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';

let arrayName = []
let arrayCuisine = []
let arrayIntolerance = []
let arrayNutrients = []
let arrayNutrionalInfo = []
let arrayInstructions = []
let arrayEquipment = []
let arrayIngridientsList = []
let arrayImages = []
let arrayDescription = []
let arrayAllergies = []

const RecipesFormat = ({ name }) => {
    return (
      <View>
        <Text style={{ fontSize: 18, fontWeight: '800' }}> {name}</Text>
      </View>
    );
  };
export default function RecipesHook() {
    const [ingridients, setIngridients] = useState('chicken')
    const [totalResults, settotalResults] = useState(0);
    const grabRecipe = () => {
        const APIKEY = '644cd0c5013146b0bb6021ab0c0027f2'
        const BASE_URL = 'https://spoonacular.com/recipes/complexSearch?'
        const PARAMS = `&query=${ingridient}`
        let FETCH_URL = `${BASE_URL}apiKey=${APIKEY}${PARAMS}`
        console.log(FETCH_URL)
        fetch(FETCH_URL, { method: 'GET' })
            .then((response) => response.json())
            .then((json) => {
                for (let i = 0; i < json.length; i += 5) { arrayName[`name_${i}`] = json.list[i].dt_txt.substring(0, 10) }
                settotalResults(json.list.length)
            })
    }
        useEffect(() => {
            console.log(ingridients);
            grabRecipe();
        }, [ingridients]);
        let recipes = [];
        for (let i = 0; i < totalResults; i += 8) {
            recipes.push(
                <RecipesFormat
                    key={i}
                    name={arrayName[`name_${i}`]}
                    
                />
            );
    }
    return (
        <View>
        <Text>Recipes </Text>
        <Picker
            selectedValue={ingridients}
            style={{ heigh: 50, width: 200 }}
            onValueChange={(val, idx) => {
              setIngridients(val); //trigger useEffect which calls grabWeather() when variable changes
            }}>
            <Picker.Item label="Chicken" value="chicken" />
            <Picker.Item label="Shrimp" value="shrimp" />
            <Picker.Item label="Steak" value="steak" />
            <Picker.Item label="Fish" value="fish"/>
        </Picker>
        {recipes}
        </View>
);
    }


