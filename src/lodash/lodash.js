const _ = require('lodash');
const months = ["january","february","march","april","may","june","july","august","september","october","november","december"];

const oddNumbers = [ 1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

const arr1 = [1,2,5,4,7];
const arr2 = [2,5,4,8,9];
const arr3 = [5,8,9,6,3];
const arr4 = [1,3,12,1,5];
const arr5 = [12,5,4,13,78];

const movie1 =  ["horror","The Shining"]; 
const movie2 = ["drama","Titanic"];
const movie3 = ["thriller","Shutter Island"];
const movie4 = ["fantasy","Pans Labyrinth"];

const solution = function(){
    console.log(_.chunk(months,3));
    console.log(_.tail(oddNumbers));
    console.log(_.union(arr1,arr2,arr3,arr4,arr5));
    console.log(_.fromPairs([movie1,movie2,movie3,movie4]));
    return "done"
}

module.exports.solution = solution;