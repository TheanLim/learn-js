// Define a JavaScript function called logMsg() that can be used to log an error message for any object that contains the property errMsg. 
function logMsg(){
    console.log(`My Error Log: ${this.errMsg}`);
}

const o1 = {
    errMsg: "Error Message 1"
}

const o2 = {
    errMsg: "Error Message 2"
}

console.log(logMsg.call(o1));
console.log(logMsg.call(o2));