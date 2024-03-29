// Write a function to count the number of characters in a string.

function countCharacters(str) {
    // Remove whitespace characters if necessary
    const trimmedStr = str.trim();
    // Return the length of the trimmed string
    return trimmedStr.length;
}

// Example usage:
// const string = "Hello, world!";
// console.log("String:", string);
// console.log("Number of characters:", countCharacters(string));

// Write a function to reverse a string.

function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

// function reverseString(str) {
//     return str.split('').reverse().join('');
// }


// Example usage:
// const string = "Hello, world!";
// console.log("Original string:", string);
// console.log("Reversed string:", reverseString(string));


// Write a function to check if a string is a palindrome.

function isPalindrome(str) {
    const len = str.length;
    // Iterate through half of the string
    for (let i = 0; i < len / 2; i++) {
        // Check if characters at symmetric positions are equal
        if (str[i] !== str[len - 1 - i]) {
            return false; // If not equal, it's not a palindrome
        }
    }
    return true; // If all characters match, it's a palindrome
}

// Example usage:
// const palindrome1 = "racecar";
// const palindrome2 = "level";
// const nonPalindrome = "hello";
// console.log(palindrome1, "is a palindrome:", isPalindrome(palindrome1));
// console.log(palindrome2, "is a palindrome:", isPalindrome(palindrome2));
// console.log(nonPalindrome, "is a palindrome:", isPalindrome(nonPalindrome));


function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    const formattedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    // Reverse the formatted string
    const reversedStr = formattedStr.split('').reverse().join('');
    // Check if the formatted string is equal to its reverse
    return formattedStr === reversedStr;
}

// Example usage:
// const palindrome1 = "A man, a plan, a canal, Panama";
// const palindrome2 = "racecar";
// const nonPalindrome = "hello";
// console.log(palindrome1, "is a palindrome:", isPalindrome(palindrome1));
// console.log(palindrome2, "is a palindrome:", isPalindrome(palindrome2));
// console.log(nonPalindrome, "is a palindrome:", isPalindrome(nonPalindrome));


// Write a function to convert a string to uppercase.

function convertToUpperCase(str) {
    return str.toUpperCase();
}

// Example usage:
// const lowercaseString = "hello, world!";
// console.log("Original string:", lowercaseString);
// console.log("Uppercase string:", convertToUpperCase(lowercaseString));


// Write a function to capitalize the first letter of  word in a string.

function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Example usage:
// const word = "hello";
// console.log("Original word:", word);
// console.log("Capitalized word:", capitalizeFirstLetter(word));



// Write a function to capitalize the first letter of each word in a string.

function capitalizeFirstLetterOfEachWord(str) {
    return str.replace(/\b\w/g, function(char) {
        return char.toUpperCase();
    });
}

// Example usage:
// const sentence = "hello, world!";
// console.log("Original sentence:", sentence);
// console.log("Capitalized sentence:", capitalizeFirstLetterOfEachWord(sentence));

function capitalizeFirstLetterOfEachWord(str) {
    const words = str.split(' '); // Split the string into words
    for (let i = 0; i < words.length; i++) {
        // Capitalize the first letter of each word
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join(' '); // Join the words back together
}

// Example usage:
// const sentence = "hello, world!";
// console.log("Original sentence:", sentence);
// console.log("Capitalized sentence:", capitalizeFirstLetterOfEachWord(sentence));



// Write a function to remove all whitespace from a string.

function removeWhitespace(str) {
    return str.replace(/\s/g, '');
}

// Example usage:
// const stringWithWhitespace = "  hello,   world!  ";
// console.log("Original string:", stringWithWhitespace);
// console.log("String without whitespace:", removeWhitespace(stringWithWhitespace));


// Write a function to check if two strings are anagrams of each other.

function areAnagrams(str1, str2) {
    // Remove non-alphanumeric characters and convert to lowercase
    const formattedStr1 = str1.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    const formattedStr2 = str2.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

    // Sort the characters of both strings and compare them
    const sortedStr1 = formattedStr1.split('').sort().join('');
    const sortedStr2 = formattedStr2.split('').sort().join('');

    return sortedStr1 === sortedStr2;
}

// Example usage:
// const word1 = "listen";
// const word2 = "silent";
// console.log(word1, "and", word2, "are anagrams:", areAnagrams(word1, word2));

// const phrase1 = "rail safety";
// const phrase2 = "fairy tales";
// console.log(phrase1, "and", phrase2, "are anagrams:", areAnagrams(phrase1, phrase2));

// const sentence1 = "Hello, world!";
// const sentence2 = "World, hello!";
// console.log(sentence1, "and", sentence2, "are anagrams:", areAnagrams(sentence1, sentence2));



// Write a function to find the first occurrence of a character in a string.

function firstOccurrence(str, char) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            return i; // Return index of first occurrence
        }
    }
    return -1; // Return -1 if character is not found
}

// Example usage:
// const string = "hello, world!";
// const character = "o";
// console.log("String:", string);
// console.log("Character to find:", character);
// console.log("First occurrence index:", firstOccurrence(string, character));


// Write a function to find the last occurrence of a character in a string.

function lastOccurrence(str, char) {
    for (let i = str.length - 1; i >= 0; i--) {
        if (str[i] === char) {
            return i; // Return index of last occurrence
        }
    }
    return -1; // Return -1 if character is not found
}

// Example usage:
// const string = "hello, world!";
// const character = "o";
// console.log("String:", string);
// console.log("Character to find:", character);
// console.log("Last occurrence index:", lastOccurrence(string, character));


// Write a function to replace all occurrences of a character in a string with another character.

function replaceAllOccurrences(str, targetChar, replacementChar) {
    return str.split(targetChar).join(replacementChar);
}

// Example usage:
// const string = "hello, world!";
// const targetChar = "o";
// const replacementChar = "-";
// console.log("Original string:", string);
// console.log("String after replacement:", replaceAllOccurrences(string, targetChar, replacementChar));


// Write a function to truncate a string if it is longer than a specified number of characters.

function truncateString(str, maxLength) {
    if (str.length > maxLength) {
        return str.slice(0, maxLength) + "...";
    }
    return str;
}

// Example usage:
// const string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
// const maxLength = 20;
// console.log("Original string:", string);
// console.log("Truncated string:", truncateString(string, maxLength));


// Write a function to check if a string contains only alphabetic characters.

function containsOnlyAlphabetic(str) {
    return /^[a-zA-Z]+$/.test(str);
}

// Example usage:
// const string1 = "HelloWorld";
// const string2 = "Hello, World!";
// console.log(string1, "contains only alphabetic characters:", containsOnlyAlphabetic(string1));
// console.log(string2, "contains only alphabetic characters:", containsOnlyAlphabetic(string2));


// Write a function to check if a string contains only numeric characters.

function containsOnlyNumeric(str) {
    return /^[0-9]+$/.test(str);
}

// Example usage:
// const string1 = "12345";
// const string2 = "12345abc";
// console.log(string1, "contains only numeric characters:", containsOnlyNumeric(string1));
// console.log(string2, "contains only numeric characters:", containsOnlyNumeric(string2));


// Write a function to check if a string contains only alphanumeric characters.

function containsOnlyAlphanumeric(str) {
    return /^[a-zA-Z0-9]+$/.test(str);
}

// Example usage:
// const string1 = "Hello123";
// const string2 = "Hello, World!";
// console.log(string1, "contains only alphanumeric characters:", containsOnlyAlphanumeric(string1));
// console.log(string2, "contains only alphanumeric characters:", containsOnlyAlphanumeric(string2));


// Write a function to remove all non-alphanumeric characters from a string.

function removeNonAlphanumeric(str) {
    return str.replace(/[^a-zA-Z0-9]/g, '');
}

// Example usage:
// const stringWithNonAlphanumeric = "Hello, World!";
// console.log("Original string:", stringWithNonAlphanumeric);
// console.log("String with non-alphanumeric characters removed:", removeNonAlphanumeric(stringWithNonAlphanumeric));


// Write a function to split a string into an array of substrings based on a delimiter.

function splitString(str, delimiter) {
    return str.split(delimiter);
}

// Example usage:
// const stringToSplit = "Hello, World!";
// const delimiter = ",";
// console.log("Original string:", stringToSplit);
// console.log("Array of substrings:", splitString(stringToSplit, delimiter));


// Write a function to join elements of an array into a single string with a specified delimiter.

function joinArray(array, delimiter) {
    return array.join(delimiter);
}

// Example usage:
// const array = ["apple", "banana", "orange"];
// const delimiter = ", ";
// console.log("Array:", array);
// console.log("Joined string:", joinArray(array, delimiter));


// Write a function to extract the domain name from a URL string.

function extractDomain(url) {
    // Regular expression to match the domain name
    const domainRegex = /^(?:https?:\/\/)?(?:www\.)?([^\/]+)/;
    // Extract the domain name using the regular expression
    const match = url.match(domainRegex);
    // Return the matched domain name (or null if no match found)
    return match ? match[1] : null;
}

// Example usage:
// const url1 = "https://www.example.com/path";
// const url2 = "http://sub.example.co.uk/page";
// console.log("URL:", url1);
// console.log("Extracted domain:", extractDomain(url1));
// console.log("URL:", url2);
// console.log("Extracted domain:", extractDomain(url2));


// Write a function to reverse words in a sentence without reversing the order of the words.

function reverseWordsInSentence(sentence) {
    // Split the sentence into words
    const words = sentence.split(" ");
    // Reverse the characters within each word
    const reversedWords = words.map(word => word.split("").reverse().join(""));
    // Join the reversed words back into a sentence
    return reversedWords.join(" ");
}

// Example usage:
const sentence = "Hello, world!";
console.log("Original sentence:", sentence);
console.log("Sentence with words reversed:", reverseWordsInSentence(sentence));


