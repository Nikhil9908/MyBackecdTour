const test = "           Hi my name is Nikhil Mishra and i am a FunctionUp Trainee       ";

const changeToLowerCase = function(){
    console.log(test.trim().toLowerCase());
}
const changeToUpperCase = function(){
    console.log(test.trim().toUpperCase());
}

module.exports.test = test;
module.exports.changeToUpperCase = changeToUpperCase;
module.exports.changeToLowerCase = changeToLowerCase;
