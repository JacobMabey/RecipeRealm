use('RecipeRealm');

const registerUser = ({Username, Password, Email, Allergens}) =>{
    db.getCollection('users').insertOne({ 'Username': Username, 'Password': Password, 'Email': Email, 'Allergens': Allergens });
} 

const loginUser = ({Username, Password }) => {
    const user = db.getCollection('users').findOne({ 'Username': Username, 'Password': Password });
    if (user) {
        loggedInUserInfo = {
            Username: user.Username,
            Password: user.Password,
            Email: user.Email,
            Allergens: user.Allergens
        };
        navigation.navigate('Home');
    } else {
        console.log('Invalid username or password');
    }
}
