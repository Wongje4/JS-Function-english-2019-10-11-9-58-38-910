function palindrome(message){
    return message == message.split("").reverse().join("");
}
palindrome('hello'); // should return false
palindrome('abcba'); // should return true
console.log(palindrome('hello'));
console.log(palindrome('abcba'));