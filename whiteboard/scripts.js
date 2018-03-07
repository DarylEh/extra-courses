//Reverse a String

function reverseString(str){
    const strArr = str.split('');
strArr.reverse();
return strArr.join('');
}



const output = reverseString('hello');

console.log(output);