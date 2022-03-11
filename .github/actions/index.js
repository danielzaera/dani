const core = require('@actions/core');
const github = require('@actions/github');

try {
  const operationA = core.getInput('operation-A');	
  const operationB = core.getInput('operation-B');
  const operation = core.getInput('operation');	
  
 const result=0
 
 if (operationA == "suma")
 {
  	result=operationA+operationB
 } 
 else if (operationA == "resta")
 {
  	result=operationA-operationB
 }
 else if (operationA == "multiplicacion")
 {
  	result=operationA*operationB
 } 
 else if (operationA == "division")
 {
  	result=operationA/operationB
 } 
 else {
	 echo "error la operacion no existe!"
         exit 1
 }
	
  core.setOutput("result", result);
 
} catch (error) {
  core.setFailed(error.message);
}
