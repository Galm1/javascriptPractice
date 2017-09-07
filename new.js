function fizzbuzz(num){
  let output = ''
  if(num%3===0){
    output += 'fizz';
  }
  if(num%5===0){
    output += 'buzz';
  }
  return output;
}

console.log(fizzbuzz(6));
fizzbuzz(10);
console.log(fizzbuzz(15));
