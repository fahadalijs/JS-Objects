// console.log(Ojects);



//collection of key and property is called object

// const obj = {
//     username: "Fahad Ali" ,
//     Email: "Fahadali@gmail.com" ,
//     Age: 20 ,
//     isLoggedIn: false
// }


// obj.username = "Muktar"
// obj.Age = "10"
// obj.Email = "Mukhtarali@gmail.com"

// console.log(obj);
// console.log(obj.username);
// console.log(obj.Email);
// console.log(obj.Age);






// let greet = function (){
//     console.log('Hello world');

// }

// greet()


// const user = {
//     name: "Fahad" ,
//     Email: "Fahadali@gmail.com" ,
//     Age: 25 ,
//     isloggedIn: true,
//     greetUser: function () {
//         console.log("Hello world!" ,  this.Age);
//         return "Hello world!"
//     } ,
//     hobbies: ["Cricket" , "Football" , "Cooking" , "Eating" , "Swiming"]

// }
// console.log(user.name);
// console.log(user.Age);
// console.log(user.Email);
// console.log(user.hobbies);
// console.log(user.greetUser());









//obj banana haa name,email,age,greetuser uska baad firstname and lastname baad ma add krna haa or name delete krna ha. greet user ka function jab bhi call hoo to wo return kraa hello '${name}'


// const obj = {
//     name: "Fahad" ,
//     email: "Fahad@----" ,
//     Age: 15 ,
//     greetuser: function () {
//         return `${this.firstName}`

//     }  
// }
// delete obj.name
// obj.firstName = "Muhammad"
// obj.lastName = "Ali"
// console.log(obj.greetuser());
// console.log(obj);





// 4 formfields banaingi name , email , age, city jaisa hi user submit pa click kraiga mera pass console ma aik object ajayega jiska undar values form wali hongi


const userName = document.querySelector("#name");
const Email = document.querySelector("#email");
const age = document.querySelector("#age");
const city = document.querySelector("#city");

function getvalue() {
    let obj = {
        name: userName.value ,
        yourEmail: Email.value ,
        Age: 20 ,
        isLoggedin: true 
    }
    console.log(obj);
}






















