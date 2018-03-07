// -------Reverse a String--------
    
    // ------Solution One-------
    // function reverseString(str){
    //     //.Split method turns a string into an array and takes in a parameter of a separator.  Since we want to separate each letter we will put empty quotes as the separator.
    //     const strArr = str.split('');
    //     //.reverse will reverse the array
    //     strArr.reverse();
    //     //.join will turn the array back into a string
    //     return strArr.join('');
    // }
    //-------Solution One but cleaner------
    // function reverseString(str){
    //     return str
    //         .split('')
    //         .reverse()
    //         .join('');
    // }

    // -----Solution Two (For Loop - decending)--------
    // function reverseString(str) {
    //     let revString = '';
    //     // str[i] can be used on a string. Doesn't have to be an array.  For loop goes thru each character.  Loop starts at th last letter
    //     for (let i = str.length -1; i >=0; i--){
    //         revString = revString + str[i];
    //     }
    //     return revString;
    // }

    // -----Solution Three (For Loop - ascending)--------
    // function reverseString(str) {
    //     let revString = '';
    //     // str[i] can be used on a string. Doesn't have to be an array.  For loop goes thru each character.  Loop starts at th last letter
    //     for (let i = 0; i <= str.length - 1; i++) {
    //         revString = str[i] + revString;
    //     }
    //     return revString;
    //     console.log(revString);
    // }

    // -----Solution Four (For of Loop)--------
    //For of loop goes thru each iterable object
    // function reverseString(str) {
    //     let revString = '';
    //     for (let x of str) {
    //         revString = x + revString;
    //     }
    //     return revString;
    //     console.log(revString);
    // }

    //-------Solution Five (For each array method) ----------
    // function reverseString(str) {
    //     let revString = '';
    //     str.split('').forEach(char => revString = char + revString);
    //     return revString;
    // }

    //-------Solution Six (Reduce array method) ----------
    function reverseString(str) {
        return str.split('').reduce((revString, char) => char + revString, '');
    }



//Call Function
const output = reverseString('hello');
console.log(output);