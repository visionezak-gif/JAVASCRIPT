
let numbers = [2, 7, 8, 5]

let target = 9



for (let index = 0; index < numbers.length; index++){
	for (counter = index+1; counter < numbers.length; counter++){
		if (numbers[index] + numbers[counter]==target){
		
		

		
		console.log([index, counter])
		}
	
	}	
	
}
