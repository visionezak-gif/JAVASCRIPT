
const prompt =require("prompt-sync")();

while (true){		
 number = Number(prompt("Multiplication Table Of: "));
 	
	
 
 if (Number.isNaN(number)){
 
 console.log("invalid, Try again")
  
}
	else{
   
 for (let index = 1; index <= 12; index++){

      
     let sum = number * index;
 
 	
 		console.log(number + "*" + index + "="  + sum);
 		
 		Number = false
 		
// 		console.log
 		
 		}
 		break
 	}
 	
   }
