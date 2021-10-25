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
    peso: 3
  }
]

/*
// const minWeight = Math.min(bicycle.peso);

// console.log(minWeight);

for (let i = 0; i < bicycle.length; i++) {
  const element = bicycle[i];
  console.log(element);
  for (const key in bicycle) {
    console.log(Math.min(bicycle.peso))
  }

} */

// prendere una bici di riferimento
let lightestBike = bicycle[0]
//ciclare fra le bici 
for (let i = 0; i < bicycle.length; i++) {
  const bike = bicycle[i];
  console.log(bike.peso);

  if (bike.peso < lightestBike.peso) {
    lightestBike = bike;
  }

}

console.log(lightestBike);
// verificare se la bici corrente è più leggere di quella selezionata

document.querySelector('.card').innerHTML = `
la bici più leggera è ${lightestBike.brand} e pesa ${lightestBike.peso}kg`;
