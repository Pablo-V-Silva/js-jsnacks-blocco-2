const bicycle = [
  {
    brand: 'Campagnolo',
    peso: 11
  },
  {
    brand: 'Deda Elementi',
    peso: 10
  },
  {
    brand: 'Fizik',
    peso: 12
  },
  {
    brand: 'Civic',
    peso: 101
  }
]

const container = document.querySelector('.container');
const card = document.querySelector('.card');

const minWeight = Math.min(bicycle.peso);

console.log(minWeight);