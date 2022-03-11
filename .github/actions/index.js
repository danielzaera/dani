const core = require('@actions/core');
const github = require('@actions/github');

try {
  const operationA = parseInt(core.getInput('operation-A'));	
  const operationB = parseInt(core.getInput('operation-B'));
  const operation = core.getInput('operation');	
  
 var result = 0;
 
 console.log(`operacion: ${operation}`);
console.log(`operationA: ${operationA}`);
console.log(`operationB: ${operationB}`);
	
 if (operation == "suma")
 {
	console.log(`estoy suma`);
  	result = operationA + operationB;
 } 
 else if (operation == "resta")
 {
	 console.log(`estoy resta`);
  	result = operationA - operationB;
 }
 else if (operation == "multiplicacion")
 {
	 console.log(`estoy multi`);
  	result = operationA * operationB;
 } 
 else if (operation == "division")
 {
  	result = operationA / operationB;
 } 
 else {
	 console.log(`error la operacion no existe!`);
 }
	
  core.setOutput("result", result);
  
  console.log(`Result: ${result}`);
	
} catch (error) {
  core.setFailed(error.message);
}
