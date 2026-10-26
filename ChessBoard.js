const prompt = require("prompt-sync")();


	
	while (true){		
 number = Number(prompt("Enter a number from 1 to 10: "));
 
 
 if(Number.isNaN(number)){
        console.log("Enter a valid number between 1 to 10: ")

  } else if (number > 10) { 
        console.log("Enter a valid number between 1 to 10: ");
    } else if (number <= 0) {
    console.log("Enter a valid number between 1 to 10: ");
    }else{

for(let index = 1; index <= number; index++){
	if (index % 2 ==0){
	console.log(" # # # #")
	}else{
	console.log("# # # #")
	}
   
   }	
	break
}
}


