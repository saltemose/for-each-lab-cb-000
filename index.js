function iterativeLog(array){
  array.forEach((element, index) => {
  console.log(`${index}: ${element}`)
  }
}

function interate(callback){
  var newArray = ["String"];
  newArray.forEach(callback);
  return newArray;

}

function doToArray(array, callback){
  array.forEach(callback)
}
