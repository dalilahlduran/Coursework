// const converse = {
//     brand: "converse",
//     hasLaces: true,
//     hasVelcro: false,
//     color: "emerald",
//     price: 60,
//     activityType: "casual",
// }

// console.log(converse.price)

const userInputString = prompt(
    "Please input your order here!",
    "vanilla", "vanilla", "vanilla", "strawberry", "coffee", "coffee"
);

const stringArray = userInputString.split(",");

const flavors = [];
for (let i = 0; i < stringArray.length; i++) {
  const str = stringArray[i];
  const flavor = parseInt(str);
  flavors.push(flavor);
}

const froyoOrder = ["vanilla", "vanilla", "vanilla", "strawberry", "coffee", "coffee"]

function getFroyoOrder(flavors) {
    const output = [];
    for (let i = 0; i < flavors.length; i++) {
     const flavor = flavors[i];
      if (flavor[0] === "c") { 
        output.push(flavor);
      }
    }
    return output  length;
  }

const getFOrder = getFroyoOrder(froyoOrder);
console.log(froyoOrder, getFOrder)