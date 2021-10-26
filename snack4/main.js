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
    peso: 33
  }
]

let lightestBike = bicycle[0]

bicycle.forEach(bike => {
  if (bike.peso < lightestBike.peso) {
    lightestBike = bike;
  }
})

document.querySelector('.card').innerHTML = `
la bici più leggera è ${lightestBike.brand} e pesa ${lightestBike.peso}kg`;
