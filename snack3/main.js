const numbers = []
let result = 0;

while (result < 50) {
  const numberRequest = Number(prompt('Scegli un numero finche la sua somma non farà 50!'));
  result += numberRequest
  numbers.push(result)
}
console.log(numbers);