// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'fail' if the parameter is 0


function notZero(input: number) {
    try {
        if (input === 0) {
            throw 'fail';
        } else (console.log(10 / input));
    }
    
    catch{
        console.log('Can not divide by 0')
    }
}
notZero(0)