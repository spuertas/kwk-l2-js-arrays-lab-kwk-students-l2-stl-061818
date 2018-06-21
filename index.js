// Write your solution here!
const drivers = ['Milo', 'Otis', 'Garfield'];
function destructivelyAppendDriver(name) {
  drivers.push(name);
}
function destructivelyPrependDriver(name) {
  drivers.unshift(name);
}
function destructivelyRemoveLastDriver(name) {
  drivers.pop(name);
}
function destructivelyRemoveFirstDriver(name) {
  drivers.shift(name);
}
function appendDriver(name) { // fix this one
  let newArray = drivers.push(name);
  return newArray;
} 
function prependDriver(name) { //fix this one
  let newArray = drivers.ushift(name);
  return newArray;
}