"use strict";

// Project 1, req. 2-c

/*
(A) Write a function named pluralizer that accepts a string
representing a singular noun, and returns a string that is the
pluralized noun.
Rules for Pluralizing Nouns:
i) If the word ends in "s" or "x," add "es" to the end of the word.
ii) If the word ends in "y," replace the "y" with "ies."
iii) Otherwise, simply add "s" to the end of the word.
These rules do not cover all nouns but are sufficient for this
exericise.
Examples:
pluralizer("exercise") => 'exercises'
pluralizer("abscess") => 'abscesses'
pluralizer("party") => 'parties'
*/

var pluralizer = function(noun) {
    var array = noun.split('');
    var pos = noun.length - 1;
    if (array[pos] == 's' || array[pos] == 'x')
        array.push('es');
    else if (array[pos] == "y") {
        array.splice(pos, 1);
        array.push('ies');
    } else {
        array.push('s')
    }
    return array.join('');
};

/*
(B) Write a function named countDivBy3 that accepts a positive
integer n, and returns the count of how many numbers
between 1 and n are divisible by 3 with no remainder. 
*/

var countDivBy3 = function(n) {
    var count = 0;
    n = Math.abs(n);
    for (var i = 1; i <= n; i++) {
        if (i % 3 == 0)
            count++;
    }
    return count;
};

/*
(C) Write a function named reverseWords that accepts a string
representing a sentence, and then returns that string with each
word reversed.
Example:
reverseWords("Mary had a little lamb") => "lamb little a had
Mary"
*/

var reverseWords = function(str) {
    return str.split(" ").reverse().join(' ');
};

/*
-----------------------NOTES--------------------------
For project 2 (reverse each word)
var reverseWords = function(str) {
	var words = str.split(" ");
	var result = "";
	for( ) {
		result = result + reverse() + " ";
	}
	return result;
};
----------------------NOTES---------------------------
*/

/*
(D) Write a function named isVowel that accepts a character
and returns true if it is a vowel, false otherwise. Use a regExp
to solve the problem.
*/

var isVowel = function(ch) {
    //ch = ch.toLowerCase();
    var vowels = /[aeiouy]/i;
    return vowels.test(ch)
};

/*
(E) Write a function named isConsonant that accepts a
character and returns true if it is a consonant, false otherwise.
Use a regExp to solve the problem.
*/

var isConsonant = function(ch) {
    var consonant = /[^aeiouy]/i;
    return isAlpha(ch) && consonant.test(ch)
};

var isAlpha = function(ch) {
    //ch = ch.toLowerCase();
    var alpha = /[a-z]/i;
    return alpha.test(ch)
};



/*
(F) Write a function named countVowelPrefixWords that
accepts a string representing a sentence, and then returns a
count of the words that start with at least two vowels.
Example:
countVowelPrefixWords("Earthworms eat loam for lunch") => 2
*/


var countVowelPrefixWords = function(str) {
    var sString = str.split(" ");
    var s = sString.length;
    var count = 0;
    for (var i = 0; i < s; i++) {
        if (isVowel(sString[i].charAt(0)) && (isVowel(sString[i].charAt(1))))
            count++;
    }
    return count;
};
