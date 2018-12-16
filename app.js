console.log("JS works!!");

//1. parameter is what is called when defining a function/what goes inside the function
    //1.   Argument is what you inpt after the function is invoked

    //2. a return function outputs the value, while console.log prints the values in the console.

    //3. We can use the return value later down the road.

//2. Palindrome Again
function checkPalindrome(word){
    const drow = [...word].reverse().join('');
    return drow === word;
  }
  console.log(checkPalindrome('radar'));
  console.log(checkPalindrome('Borscht'));

//3. 

function sumDigits(n) {
	var sum = 0;
	var string = n.toString();
 	for(i=0; i < string.length; i++){
		sum = sum + parseInt(string.substring(i, i+1));
	}
 	return sum;
} 
console.log(sumDigits(176878));
  
//4. Pythogoras
  const calculateSide = (sideA, sideB) => {8
      return Math.hypot(sideA, sideB);
  }

  console.log(calculateSide(8, 6));
  
//5.
function sumDigits() {
    var firstNum = 0;
    for (var i=0; i < arguments.length; i++) {
        firstNum += arguments[i];
    }
    return firstNum;
 }
 
 console.log(sumDigits(46, 54));

 //6.
function checkPrime (num){
    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num % i === 0){
            return false;
        }
        else{
            return true;
        }
    }
}

console.log(checkPrime(12));
  

