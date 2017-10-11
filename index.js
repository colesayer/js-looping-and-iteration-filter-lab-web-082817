// Code your solution in this file
function findMatching(arr, str){
  return arr.filter(x => x.toLowerCase() === str.toLowerCase())
}

function fuzzyMatch(arr, str){
  return arr.filter(x => x.charAt(0) === str.charAt(0))
}

function matchName(arr, str){
  return arr.filter(x => x['name'] === str)
}
