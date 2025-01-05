// Import the process module
const process = require('process');

// Resume the standard input stream
process.stdin.resume();

// Set the encoding for the input data
process.stdin.setEncoding('utf8');

// Listen for data event on the standard input stream
process.stdin.on('data', function(data) {
    // Remove newline characters from the input
    const input = data.trim();

    // Function to check if a string is a palindrome
    function isPalindrome(str) {
        const reversed = str.split('').reverse().join('');
        return str === reversed;
    }

    // Check if the input is a palindrome
    if (isPalindrome(input)) {
        console.log('The input is a palindrome.');
    } else {
        console.log('The input is not a palindrome.');
    }
});

// Listen for the end event to handle the end of input
process.stdin.on('end', function() {
    console.log('End of input');
});