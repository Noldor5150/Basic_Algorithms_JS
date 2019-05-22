

function evenOrOdd(x){
  if (isNaN(x)){
    return NaN;
  }
  if( x % 2 === 0){
    return 'is even';
   }
  else if(x % 2 === 1){
   return 'is odd ';
   }
  else{
     return 'not an integer';
   }
};
console.log(evenOrOdd("alio"));
function checkEvenOdd(number) {
  if (typeof number != 'number') {
    return NaN;
  }
  return number % 2 == 0 ? 'Even' : 'Odd';
};


function generate(x){
return x.split("").map((letter, index)=>{
  return (letter.repeat(index));
 }).join("-");
};

console.log(generate("1234"));

function myFilter(arr, type){
  return arr.filter(function(el) {
    return typeof el == type;
  })
};

const arejus = ['apple', 'banana', 1, 5, 10];

console.log(myFilter(arejus , 'float'));


const stringuArejus = ['1.5', '2', '15', '5', '10'];

function stringToNumber (arr){
  return arr.map(function(el) {
    return parseFloat(el);
})
};

console.log(stringToNumber(stringuArejus));

const jedi= [
  {
    id: 5,
    name: "Luke Skywalker",
    pilotingScore: 98,
    shootingScore: 56,
    isForceUser: true,
  },
  {
    id: 82,
    name: "Sabine Wren",
    pilotingScore: 73,
    shootingScore: 99,
    isForceUser: false,
  },
  {
    id: 22,
    name: "Zeb Orellios",
    pilotingScore: 20,
    shootingScore: 59,
    isForceUser: false,
  },
  {
    id: 15,
    name: "Ezra Bridger",
    pilotingScore: 43,
    shootingScore: 67,
    isForceUser: true,
  },
  {
    id: 11,
    name: "Caleb Dume",
    pilotingScore: 71,
    shootingScore: 85,
    isForceUser: true,
  },
];

function objectsFilter(arr,key){
  var newArr = [];
  for (var i=0; i < arr.length ; ++i)
  newArr.push(arr[i][key]);
  return newArr;
};
function getFields(arr, key) {
  return arr.map(function(item) {
      return item[key];
  });
}
function getKey(arr, key) {
  //  reduce the provided arr to an array only containing the requested key
  return arr.reduce(function(array, item) {
      //  check if the item is actually an object and does contain the key
      if (typeof item === 'object' && key in item) {
          array.push(item[key]);
          //  return the 'array' (which is the list of matched key values)
      return array;
      }
      else {
        return array;
      }
  }, 
[]);
}
let lol = [1,2,3];
console.log(objectsFilter(jedi, 'isForceUser'));
console.log(getFields(jedi, 'name'));
console.log(getKey(lol, 'id'));

const geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
const goose = ["African", "Roman Tufted", "lenkiska", "Toulouse", "Pilgrim", "Steinbacher", "lietuviska", "Pilgrim"];

function removeBadFromExisting(array, badarray){
  return filteredItems = array.filter(item =>!badarray.includes(item))
}

console.log(removeBadFromExisting(goose, geese));
