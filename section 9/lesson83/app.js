let re;

//Metacharacter symbols
re = /^h/i;             // Must start with
re = / world$/i;        // Must end with
re = /^hello$/i;        // Must begin and end with
re = /h.llo/i;          // Matches any ONE character
re = /h*llo/i;          // Matches any character 0 or more times
re = /gre?a?y/i;        // Optional character
re = /gre?a?y\?/i;      // Escape character

// Brackets [] - Character Sets
re = /gr[ae]y/i;        // Must be an a or e
re = /[^GF]ray/i;       // Match anything except G or F
re = /[A-Z]ray/;        // Match any uppercase

// Braces {} -  Quantifiers
re = /Hel{2}o/i;        // Must occur exactly {m} amount of times
re = /Hel{2,4}o/i;        // Must occur between {m} amount of times
re = /Hel{2,}o/i;        // Must occur at least {m} amount of times

// Parenthesis () - Grouping
re = /([0-9]x){3}/;
re = /^([0-9]x){3}$/;   // Repeat group exactly 3 times

const str = '2x3x3x';

const result = re.exec(str);
console.log(result);

function reTest(re, str){
    if(re.test(str)){
        console.log(`${str} matches ${re.source}`);
    } else {
        console.log(`${str} does not match ${re.source}`);
    }
}

reTest(re, str);