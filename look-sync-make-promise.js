
/**
 * My first solution
 */
// function askFoo() {
//   return new Promise(function (resolve, reject){
//     resolve('foo')
//   })
// }

// function run (genCb) {
//   const g = genCb();
//   const p = g.next();
//   p.value.then(r => g.next(r));
// }

// run(function *() {
//   const foo = yield askFoo();
//   console.log(foo);
// })

/**
 * Official solution
 */

function getFoo() {
  return new Promise(function(resolve, reject) {
    resolve('foo');
  });
}

function run (generatorCb) {
  const gen = generatorCb();

  const go = (result) => {
    if(result.done) return result.value;
    return result.value.then(v => go(gen.next(v)), e => go(gen.throw(e)))
  };

  go(gen.next());
}

run(function *() {
  try {
    const foo = yield getFoo();
    console.log(foo);
  } catch (err) {
    console.log(err);
  }
});