const core = require('@actions/core');
const github = require('@actions/github');

try {
  const operationA = core.getInput('operation-A');	
  const operationB = core.getInput('operation-B');
  const operation = core.getInput('operation');	
  
 const result = 0;
 
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
	 console.log('error la operacion no existe!');
 }
	
  core.setOutput("result", result);
 
} catch (error) {
  core.setFailed(error.message);
}
