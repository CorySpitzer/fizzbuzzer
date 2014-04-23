/* FizzBuzz.js
 * 
 * By Cory Spitzer
 * April, 2015
 * 
 * For use with NodeJS
 * 
 * Specification below from tinyurl.com/679c2s
 * 
 * Write a program that prints the numbers from 1 to 100. 
 * But for multiples of three print “Fizz” instead of the 
 * number and for the multiples of five print “Buzz”. For 
 * numbers which are multiples of both three and five 
 * print “FizzBuzz”.
 * 
 */
 
var string3 = 'Fizz';
var string5 = 'Buzz';
    for (var i=0; i<101; i++){
    if (i%15 === 0)
        console.log(string3+string5);
    else if (i%3 === 0)
        console.log(string3);
    else if (i%5 === 0)
        console.log(string5)
    else
        console.log(i)
    }
 
