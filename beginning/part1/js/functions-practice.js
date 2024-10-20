//STEP 1
function halfNumber(number) {
    var result = number / 2;
    document.write("Half of " + number + " is " + result + ".<br>");
    return result;
}
halfNumber(5); // Writes "Half of 5 is 2.5."

//STEP 2
function squareNumber(number) {
    var result = number * number;
    document.write("The result of squaring the number " + number + " is " + result + ".<br>");
    return result;
}
squareNumber(3); 
//STEP 3
function percentOf(num1, num2) {
    var result = (num1 / num2) * 100;
    document.write(num1 + " is " + result + "% of " + num2 + ".<br>");
    return result;
}
percentOf(2, 4); // Writes "2 is 50% of 4."

//STEP 4
function findModulus(num1, num2) {
    var result = num2 % num1;
    document.write(num1 + " is the modulus of " + num2 + " and " + num1 + ".<br>");
    return result;
}
findModulus(4, 10); // Writes "4 is the modulus of 10 and 4."

//STEP 5
function collectAndSumNumbers() {
    var input = prompt("Enter numbers separated by commas:");
    var numbers = input.split(",").map(Number);
    var sum = 0;

    for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    
    document.write("The sum of the numbers is: " + sum + "<br>");
    return sum;
}
collectAndSumNumbers(); // Prompts user input and writes the sum
