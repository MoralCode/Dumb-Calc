// main.js

function calculate(expression) {
  let index = 0;
  let number = "";
  let tokenized = [];
  while (index < expression.length) {
    let character = expression[index];
    if (character >= '0' && character <= '9') {
      number += character;
    } else if (character == '+' || character == '-' || character == '*' || character == '/') {
      tokenized.push(parseInt(number));
      number = "";
      tokenized.push(character);
    }
    index += 1;
  }
  if (number !== "") {
    tokenized.push(parseInt(number));
  }
  return parse(tokenized);
}

function parse(tokenized) {
  let result = null;
  for (let i=0; i<tokenized.length; i++) {
    console.log(tokenized[i]);
    if (tokenized[i] == '+' || tokenized[i] == '-' || tokenized[i] == '*' || tokenized[i] == '/') {
      if (result !== null) {
        result = evaluate(result, tokenized[i + 1], tokenized[i]);
      } else {
        result = evaluate(tokenized[i - 1], tokenized[i + 1], tokenized[i]);
      }
    }
  }
  return result;
}

function evaluate(number1, number2, operation) {
  if (operation == '+') {
    return number1 + number2;
  } else if (operation == '-') {
    return number1 - number2;
  } else if (operation == '*') {
    return number1 * number2;
  } else if (operation == '/') {
    return number1 / number2;
  }
}

let result = calculate(process.argv[2]);
console.log("The result of " + process.argv[2] + " is " + result.toString())
