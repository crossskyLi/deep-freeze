import deepFreeze from '../index.js';
var obj = { a: 1 };

deepFreeze(obj);
try {
  console.log("obj.x === undefined", obj.x === undefined);
  console.log("obj.a = 5;", obj.a);
  obj.a = 5;

} catch (err) {
  console.error(err)
}


try {
  console.log("(obj.prototype.z === undefined)", obj.prototype.z === undefined);
  obj.prototype.z = 3;

} catch (err) {
  console.error(err)
}
console.log(obj)