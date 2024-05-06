
/*
student version with NO assertion tests or refactoring implemented
*/
const max = 1000;   // Set upper bounds
const min = 0;      // Set lower bounds
let check4prime;    // global object

class Check4Prime {
    /*
    Calculates prime numbers and put true or false in an array
    */
    primeCheck(num) {
        // Initialize array to hold prime numbers
        let primeBucket = new Array(max + 1);

        // Initialize all elements to true, non-primes will be set to false later
        for (let i = 2; i <= max; i++) {
            primeBucket[i] = true;
        }

        // Do all multiples of 2 first
        let j = 2;
        for (let i = j+j; i <= max; i = i+j) { // start with 2j as 2 is prime
            primeBucket[i] = false; // set all multiples of 2 to false
        }

        for (j = 3; j <= max; j = j+2) { // begin from 3 up to max
            if (primeBucket[j] == true) { // only do if primeBucket[j] is still a prime (not a multiple of 3, 5, 7, ...)
                for (let i = j+j; i <= max; i = i+j) { // start with 2j as j is a prime
                    primeBucket[i] = false; // set all multiples of the prime to false
                }
            }
        }

        // Check input against prime array
        if (primeBucket[num] == true) {
            return true;
        }
        else {
            return false;
        }
    }


    /*
    Method to validate input
    */
    checkArgs() {
        /*
        for (var i=0; i < arguments.length; i++)
            console.log(arguments[i]);
        */

        // Check arguments for correct number of parameters if not throw new Error();
        if (arguments.length != 1) {

        }
        else
        {
             if (typeof arguments[0] === 'undefined') {
                throw new Error("Argument is undefined");
            }
            // If zero/empty throw new Error();
             if (arguments[0] === 0 || arguments[0] === "") {
                throw new Error("Argument is zero/empty");
             }

            // Is not integer? throw new Error();
            if ((typeof arguments[0]) !== 'number'){
                throw new Error("Argument is not a number")
                        }
            // Get integer from character

            // If not a number throw new Error();
            if (arguments[0] === NaN){
                throw new Error("Argument is NaN")
            }
            // If less than lower bounds throw new Error();
            if (arguments[0] < min){
                throw new Error("Argument is under lower bound")
            }
            // If greater than upper bounds throw new Error();
            if (arguments[0] > max){
                throw new Error("Argument is over maximum bound")
            }
        }
    }
} // end Check4Prime class



/*
do the automated tests cases when developer performs test
*/
function checkTest(num)
{
    assert(num, "description");

    check4prime = new Check4Prime();

    // run various automated tests
    test_Check4Prime_known_true();
    test_Check4Prime_known_false();
    test_Check4Prime_checkArgs_neg_input();
    test_Check4Prime_checkArgs_above_upper_bound();
    test_Check4Prime_checkArgs_char_input();
    test_Check4Prime_checkArgs_2_inputs();
    test_Check4Prime_checkArgs_zero_input();
    test_Check4Prime_checkArgs_undefined_input();
    test_Check4Prime_checkArgs_non_integer_input();
}

/*
do the check for prime when ordinary user is running solution, you can merge this function with checkTest() if you want
*/
function check(num)
{
    checkTest(num) // when code is in production mode running the tests cases is commented away
    check4prime = new Check4Prime();

    try {
        //check4prime.checkArgs(num);
        check4prime.checkArgs(parseInt(num));
        // either use this assertion or the alert box for output

        //assert(check4prime.primeCheck(num), description)
        alert(`Is number ${num} a prime? ${check4prime.primeCheck(num)}`)
    }
    catch (err) {
        let description = `Input/number: ${num}. Error in checkArgs()`;
        assert(check4prime.primeCheck(num), description);
    }
}

/*
append test result in list on web page
*/
function assert(outcome, description) {
    let output = document.querySelector('#output');
    let li = document.createElement('li');
    li.className = outcome ? 'pass' : 'fail';
    li.appendChild(document.createTextNode(description));
    output.appendChild(li);
}

/*
Test methods, recommended naming convention
(Test)_MethodToTest_ScenarioWeTest_ExpectedBehaviour
In test method the pattern we use is "tripple A"
Arrange, Act and Assert
*/

// Test case 1, check known true primes
function test_Check4Prime_known_true() {
    // The arrangement below is called tripple A

	// Arrange - here we initialize our objects
    let knownTrue = new Array(3, 17, 29, 997)

    // Act - here we act on the objects
    for(let num of knownTrue) {
        // Assert - here we verify the result
        assert(check4prime.primeCheck(num), `Test for known true primes with: ${num}`)
    }
}

// Test case 2, check known false primes
function test_Check4Prime_known_false() {
    // The arrangement below is called tripple A
	// Arrange - here we initialize our objects
    let knownFalse = new Array(1, 12, 27, 998)
    // Act - here we act on the objects
    for(let num of knownFalse) {// Assert - here we verify the result
        assert(!check4prime.primeCheck(num), `Test for known false primes with: ${num}`)
    }
}

// Test case 3, check negative input
function test_Check4Prime_checkArgs_neg_input() {
    // Arrange - here we initialize our objects
    let num = -1;
    // Act - here we act on the objects
    // Assert - here we verify the result
    assert(!check4prime.primeCheck(num), `Test for negativ inpt : ${num}`);
}

// Test case 4, check for upper bound limit
function test_Check4Prime_checkArgs_above_upper_bound() {
    // Arrange - here we initialize our objects
    let num = 1001;
    // Act - here we act on the objects
    // Assert - here we verify the result
    assert(!check4prime.primeCheck(num), `Test for upper bound : ${num}`);

}

// Test case 5, check for char input
function test_Check4Prime_checkArgs_char_input() {
    // Arrange - here we initialize our objects
    let str = 'a';
    // Act - here we act on the objects
    // Assert - here we verify the result
    assert(!check4prime.primeCheck(str), `Test for string input : ${str}`);
}

// Test case 6, check for more than one input
function test_Check4Prime_checkArgs_2_inputs() {
    let str = 'multipal'
    assert(!check4prime.primeCheck(str, str), `Test for multipal input : ${str, str}`);
}

// Test case 7, check for zero/empty input
function test_Check4Prime_checkArgs_zero_input() {
    // Arrange - here we initialize our objects
    // Act - here we act on the objects
    // Assert - here we verify the result
    assert(!check4prime.primeCheck(), `Test for no input : `);
}

// Test case 8, check for undefined input
function test_Check4Prime_checkArgs_undefined_input() {
    // Arrange - here we initialize our objects
    let und = undefined;
    // Act - here we act on the objects
    // Assert - here we verify the result
    assert(!check4prime.primeCheck(und), `Test for undefined input : ${und}`);
}

// Test case 9, check for non-integer input
function test_Check4Prime_checkArgs_non_integer_input() {
    // Arrange - here we initialize our objects
    let array = [1,2];
    // Act - here we act on the objects
    // Assert - here we verify the result
    assert(!check4prime.primeCheck(array), `Test for non int input : ${array}`);
}