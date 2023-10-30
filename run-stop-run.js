
/**
 * My solution
 */
// function *range(from, to) {
//   let x = from;
//   while(x < to + 1) yield x++;
// }

// for(let v of range(5, 10)) {
//   console.log(v)
// }

/**
 * Official solution
 */

function *range(from, to){
  for(let i = from; i <= to; i++){
    yield i;
  }
}

for(let v of range(5,10)){
  console.log(v);
}