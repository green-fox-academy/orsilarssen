let generalText: string = "iuouosodiusioudofousitttttt";
	
function mostChar(text: string): string{
    let characterOccurence = {}
    for(let i: number = 0; i < text.length; ++i){ 
        if(characterOccurence.hasOwnProperty(text.charAt(i))){
            characterOccurence[text.charAt(i)] += 1;
        }else{
            characterOccurence[text.charAt(i)] = 1;
        }
    }

    console.log(characterOccurence);
	
let max: number = 0;
let maxKey: string = "";
    Object.keys(characterOccurence).forEach(function(element){
    if(characterOccurence[element] >= max){
      max = characterOccurence[element];
            maxKey = element;
        }
    })
	
    return maxKey;
}
	
console.log("Most occured character: " + mostChar(generalText));
	
console.log("---------------------")
	
let array3: number[] = [1, 2, 3, 4, 5, 6, 7];
function countEven(array: number[]): number{
    let counter: number = 0;
    for(let i: number = 0; i < array.length; ++i){
        if(array[i] % 2 == 0){
            ++counter;
        }
    }

    return counter;
}
	
console.log("Even numbers: " + countEven(array3)); 