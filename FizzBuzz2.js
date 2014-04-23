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
 
 
 
 function fizzBuzzer(fb_range, fizz_num, buzz_num){
    /* Function for the classic FizzBuzz problem
     * Returns a multi-line string 
     * 
     * In NodeJS we should have something like
     * > fizzBuzzer(6, 2, 3)
     *   1
     *   Fizz
     *   Buzz
     *   Fizz
     *   5
     *   FizzBuzz
     */
    
    var fizzbuzz_num = fizz_num*buzz_num;
    var out_string = '';
    var str1 = 'Fizz';
    var str2 = 'Buzz';

    
    for (var i=0; i<=fb_range; i++){
        if (i%fizzbuzz_num === 0)
            out_string + str1 + str2 + '\n';
        else if (i%fizz_num === 0)
            out_string + str1 + '\n';
        else if (i%buzz_num === 0)
            out_string + str2 + '\n';
        else
            out_string + i + '\n';
        }
    return out_string;
 
 }
 
 console.log(fizzBuzzer(100, 3, 5));
