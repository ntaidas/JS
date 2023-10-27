/* ------------------------------ TASK 7 -----------------------------------
Turimas "audi" objektas.

Parašykite funkciją showObjectKeys, kuri kaip argumentą priims objektą 
ir grąžins visus jo "key" masyve.
-------------------------------------------------------------------------- */
const audi = {
  marke: 'audi',
  model: 'A6',
  year: 2005,
  color: 'white'
};

function showObjectKeys(objektas){
  const keysArray = [];
  Object.keys(objektas).forEach(key => keysArray.push(key));
  return keysArray;
}

console.log(showObjectKeys(audi));