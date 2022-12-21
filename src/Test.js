// REVERSED STRING FUNCTION

//console.log(stringNum.length - 1);

// function reverseString(str) {
// 	return str.split("").reverse().join("");
// }

// console.log(reverseString("good bye"));

function reverseString(str) {
	let reversedStr = "";
	for (let i = str.length - 1; i >= 0; i--) {
		reversedStr += str[i];
	}
	return reversedStr;
}
// -----------------------------------------------------------------
//

// FACTORIZE
// function factorize(num){
//     let product = 1;
//     for(let i = 2; i<=num; i++){
//         product *=i;
//     }
//     return product;
// }
// function factorize(num) {
// 	if (num == 0) {
// 		return 1;
// 	}
// 	return num * factorize(num - 2);
// }
// console.log(factorize(6));
// --------------------------------------------------------

// LongestWordLength====

function findLongestWordLength(str) {
	return Math.max(...str.split(" ").map((word) => word.length));
}
// console.log(
// 	findLongestWordLength("The quick brown fox jumped over the lazy dog")
// );
function findLongestWordLength1(str) {
	let words = str.split(" ");
	let maxLength = 0;
	//console.log(words);
	for (let i = 0; i < words.length; i++) {
		if (words[i].length > maxLength) {
			maxLength = words[i].length;
		}
	}
	return maxLength;
}
// console.log(
// 	findLongestWordLength1("The quick brown fox jumped over the lazy dog")
// );
// --------------------------------------------------------
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
	(accumulator, currentValue) => accumulator - currentValue,
	initialValue
);

//console.log(sumWithInitial);
// expected output: 10
