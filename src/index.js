const obj = {
  name: 'мечник',
  health: 10,
  level: 2,
  attack: 80,
  defence: 40,
};

const obj = {
  name: 'мечник',
  health: 10,
  level: 2,
  attack: 80,
  defence: 40,
};

function createObj(key, value){
    this.key = key;
    this.value = value;
  }
const massiv = [];

for (const item in obj) {
  const newObj = new createObj(item, obj[item]);
  massiv.push(newObj)
}
console.log(massiv)

// на выходе получаю массив из объектов 
// [
//  createObj { key: 'name', value: 'мечник' },
//  createObj { key: 'health', value: 10 },
//  createObj { key: 'level', value: 2 },
//  createObj { key: 'attack', value: 80 },
//  createObj { key: 'defence', value: 40 }
// ] 
