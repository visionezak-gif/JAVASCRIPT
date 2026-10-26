const prompt = require("prompt-sync")();


const number = [];
while(true){
number = Number(prompt("Enter numbers -1 to stop: "))



for (let index = 0; index <= number; index++){
		for(let count = 0; count <= index; count++){
			for(let counter = 2; counter < count; counter++){
				if (count == counter){
				console.log(number)
				}
			}
		
		}
	}


if (number == -1){
	break
  }

	
}

console.log(number)

