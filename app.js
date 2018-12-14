console.log("JS works!!");

//1. parameter is what is called when defining a function
    //1.   Argument is what you inpt after the function is invoked

    //2. a return function outputs the value, while console.log prints the values in the console.

    //3. We can use the return value later down the road.

//2. Palindrome Again

function sumDigits() {
    var value = document.getElementById("thenumber").value,
        sum = 0;

  while (value) {
      sum += value % 10;
      value = Math.floor(value / 10);
  }
  
  var rezultat = document.getElementById("result");
  rezultat.value = sum;
}

