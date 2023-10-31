/**
 * My solution
 */
// function *factorial(n) {
//   for(let i = 1; i <= n; i++){
//     let x = i;
//     let v = 1;
//     while(x > 0) {
//       v = v * x;
//       x--;
//     }
//     yield v;
//   }
// }

// for(let n of factorial(5)){
//   console.log(n);
// }

/**
 * Official Solution
 */

function *factorial(n) {
  let result = 1;
  for(let i = 1; i <= n; i++){
    result *= i;
    yield result;
  }
}

for(let n of factorial(5)){
  console.log(n)
}