interface Food {
  name: string;
  price: number;
}

interface MithaFood extends Food {
  isTooSweet: boolean;
}

function setMithai(mithai: MithaFood) {
  mithai.isTooSweet = true;
}
function getMithai(mithai: MithaFood): [string, number, boolean] {
  return [mithai.name, mithai.price, mithai.isTooSweet];
}

let favouriteMithai: MithaFood = {
  name: "Ladoo",
  price: 200,
  isTooSweet: false, 
};

console.log(favouriteMithai.isTooSweet);

setMithai(favouriteMithai);

console.log(getMithai(favouriteMithai)[0]);