use('RecipeRealm');
db.getCollection('Users').insertOne({ 'Username': "Dummy", 'Password': "1234", 'Email': "myemail@gmail.com", 'Allergens': ["Potatoe","Candy", "Dogs"] });

// const registerUser = ({Username, Password, Email, Allergens}) =>{

// } 

// const loginUser = ({Username, Password }) => {
//     const user = db.getCollection('users').findOne({ 'Username': Username, 'Password': Password });
//     if (user) {
//         loggedInUserInfo = {
//             Username: user.Username,
//             Password: user.Password,
//             Email: user.Email,
//             Allergens: user.Allergens
//         };
//         navigation.navigate('Home');
//     } else {
//         console.log('Invalid username or password');
//     }
// }
