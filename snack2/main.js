const soccerSquads = [
  {
    name: 'Milan',
    points: 0,
    falls: 0
  },
  {
    name: 'Inter',
    points: 0,
    falls: 0
  },
  {
    name: 'Juve',
    points: 0,
    falls: 0
  },
  {
    name: 'Real Madrid',
    points: 0,
    falls: 0
  }
]

console.log(soccerSquads);
/*const random = Math.floor(Math.random() * 10);


console.log(soccerSquads[0].points = random);
console.log(soccerSquads[0].falls = random);

console.log(soccerSquads[1].points = random);
console.log(soccerSquads[1].falls = random);

console.log(soccerSquads[2].points = random);
console.log(soccerSquads[2].falls = random);

console.log(soccerSquads[3].points = random);
console.log(soccerSquads[3].falls = random); */

for (let i = 0; i < soccerSquads.length; i++) {
  const team = soccerSquads[i];

  team.points = Math.floor(Math.random() * 10)
  team.falls = Math.floor(Math.random() * 10)

}