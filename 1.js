const obj = {a: 1, b: 2};

const newObj = Object.create(obj);

newObj.num1 = 3;
newObj.num2 = 4;

function logObj(newObj) {
  for (let key in newObj) {
    if (newObj.hasOwnProperty(key)) {
    console.log(`${key} : ${newObj[key]}`)
    }
  }
}

logObj(newObj);