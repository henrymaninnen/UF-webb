array = [1,2,3,4,5]

array.forEach(item => {
    if (item >= 4) {
   //  console.log(item);   
    } else{
      //  console.log("NOOB");
    }
});

//1

hello = (hej) => {
    var plus = hej + 1;
   // console.log(plus);
  
  }
  hello(2)
  
  //2
  hoursToSeconds = (seconds) => {
    var hours = 4;
    var min = hours * 60;
   // console.log(seconds);
  }
  hoursToSeconds(240 * 60 + " sekunder");

  //3

  triangelArea = () => {
 var triangelHeight = 1;
 var triangelWidth = 10; 
 var triangelArea2 = (triangelHeight * triangelWidth) / 2; 
 
  //console.log(triangelArea2);
}   
triangelArea()

//4
daysToMinutes = () => {
    var days = 2;
    var hours = 48; 
    var minutes = hours * 60; 
    
     //console.log(minutes);
   }   
   daysToMinutes();

   //5
   number = () => {
       var number = 1;
       if (number <= 0) {
        // console.log(true);
       } else{
           //console.log(false);
       }
   }
number();

 //6 
 number2 = () => {
     var number1 = 10;
     var number2 = 1;

     if (number1 + number2 < 100) {
        // console.log(true);
     } else{
        // console.log(false);
     }
 }
 number2()

 //7

 //loopa
 array2 = [1,2,3,4]

 let getEven = (item) =>{
   item.filter((numbers) =>{
    return numbers%2 === 0;
  })
 }
 //console.log(getEven(array2));


array2.forEach(item => {
    if (item%2 == 0) {
     // console.log(item);   
    } else{
      // console.log("inte jämt");
    }
});

//8
array2.forEach(item => {
  var itemTogther = item * item;
  // console.log(itemTogther);
});

//reduce
let gangerArray = (arr) =>{
  let reduceArray = arr.reduce((total, value) =>{
    return total * value;
  });
  return reduceArray;
};
//console.log(gangerArray(array2));


//namn length

var names = ["henry", "bertil", "erik", "olof"];

function shorterThanSix(arr){

  var shortNames = arr.filter((name) => name.length <= 6)
//  console.log(shortNames);
}
shorterThanSix(names)

function longerThan6() {
  if (names.length > 6) {
   // console.log(names.item);
  }
}
longerThan6()