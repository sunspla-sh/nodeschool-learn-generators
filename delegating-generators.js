function *flat(arr) {
  for(let e of arr){
    if(Array.isArray(e)) yield *flat(e)
    else yield e
  }
}

const a = [1, [2, [3, 4], 5], 6];

for(let f of flat(a)){
  console.log(f);
}