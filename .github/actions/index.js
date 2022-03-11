const core = require('@actions/core');
const github = require('@actions/github');

try {
  const operationA = core.getInput('operation-A');	
  const operationB = core.getInput('operation-B');
  const operation = core.getInput('operation');	
  
 const result=0
 
	
 if (operation == suma)
 {
  	result=operationA + operationB
 } 
 else if (operation == resta)
 {
  	result=operationA - operationB
 }
 else if (operation == multiplicacion)
 {
  	result=operationA * operationB
 } 
 else if (operation == division)
 {
  	result=operationA / operationB
 } 
 else {
	 echo "error la operacion no existe!"
 }
	
  core.setOutput("result", result);
 
} catch (error) {
  core.setFailed(error.message);
}
