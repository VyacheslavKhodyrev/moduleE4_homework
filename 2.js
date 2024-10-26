const obj = {a: 1, b: 2};

const newObj = Object.create(obj);

newObj.num1 = 3;
newObj.num2 = 4;

const logObj = (object, str) => console.log(str in object)

logObj(newObj, "a")