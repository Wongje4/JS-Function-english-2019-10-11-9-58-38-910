function alphabetSort(message){
    // wirte your code here
    return message.split("").sort().join("");
}
alphabetSort('hello'); // should return 'ehllo'
console.log(alphabetSort('hello'));