// Write your solution in this file!
var driver = {
  name : "value"
}
function updateDriverWithKeyAndValue(driver,key,value){
  var driver1 = {[key]:value}
  var updateDriver = Object.assign({},driver,driver1)
  return updateDriver
}
function destructivelyUpdateDriverWithKeyAndValue(driver,key,value){
  var driver1 = {[key]:value}
  var driver = Object.assign({},driver,driver1)
  
}