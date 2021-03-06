let landscape = function() {
  let result = "";
  let flat = function(size) {
    for (let i = 0; i < size; i++)
      result += "_";
  };
  let mountain = function(size) {
    result += "/";
    for (let i = 0; i < size; i++)
      result += "'";
    result += "\\";
  };
  let jaggedMountain = function(size) {
    result += "/";
    for (let i = 0; i < size; i++)
      result += "^";
    result += "\\";
  };

  flat(3);
  mountain(6);
  flat(6);
  mountain(1);
  flat(1);
  jaggedMountain(4);
  return result;
};

console.log(landscape());
// → ___/''''\______/'\_


////////////////////////////////////////////////////////////////


//
// let launchMissiles = function(value) {
//   missileSystem.launch("now");
// };
// if (safeMode)
//   launchMissiles = function(value) {
//     /* do nothing */
//   }; else {
//     launchMissiles = function(value) {/* launch missle */};

//////////////////////////////////////////////////////////////////


// function power(base, exponent) {
//   if (exponent == undefined)
//   exponent = 2;
//   let result = 1;
//   for (let i = 0; i < exponent; i++)
//     result *= base;
//   return result;
// }
// console.log(power(4));
// /* → 16 */
// console.log(power(4, 3));
// /* → 64 */

///////////////////////////////////////////////////////


function power(base, exponent) {
  // if (power() == power(base, !)){
  //     return;
  if (exponent == 0){
    return 1;
  }else {
    // console.log(base * power(base, exponent - 1));
    return base * power(base, --exponent);
  }
}
console.log(power(4,3));
// → 8


// function r(str){
//   let strL = str.length - 1;
//   let newStr = '';
//    for (var i = strL; i >= 0; i--) {
//      newStr += str.charAt(i)
//    }
//    return newStr;
// }
// console.log(r('hello'));


function reverse(str){
  console.log(str);
  if(str == ''){
    return str;
  }
  return reverse(str.slice(1))+str.charAt(0);
}
console.log(reverse('recursion'));


// console.log('p'.slice(1))



function getProduct(arr){
  let pArray = []
  for (var i = 0; i < arr.length; i++) {
    let product = 1;
    for (var j = 0; j < arr.length; j++) {
      if(j !== i){
        product *= arr[j] ;
      }
    }
    pArray.push(product);
  }
  return pArray;
}

console.log('get the product ' + getProduct([1,7,3,4]));


function fibbonacci(seq){
  if (seq <= 2){
    return 1;
  }
  let s = 3;
  let n = 1;
  let n2 = 1;
  while (s <= seq) {
    n += n2;
    n2 = n - n2;
    s++
  }
  return n;
}

function fibRecursive(n){
  if(n===0){
    return 0
  }else if(n<=2){
    return 1;
  }
 return fibRecursive(n - 1) + fibRecursive(n - 2);
}


console.log(fibbonacci(9))
console.log(fibRecursive(7));




let numRows = 15,
    triangle,
    start,
    stop;

function fibTriRecursive(n, a) {

  if (n < 2) return a;

  let prevRow = a[a.length-1];
  let curRow = [1];

  for (var i = 1; i < prevRow.length; i++) {
    curRow[i] = prevRow[i] + prevRow[i-1];
  }
  curRow.push(1);
  a.push(curRow);

  return fibTriRecursive(n-1, a);
}
triangle = fibTriRecursive(numRows, [[1]]);

for(var i = 0; i < triangle.length; i++)
  console.log(triangle[i]+"\n");











///
