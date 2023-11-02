/**
 * Example
 */
// const fs = require('fs');

// function run(generator) {
//   console.log('here 3')
//   let it = generator(go);
//   console.log('here 4')
//   function go(err, result) {
//     console.log('here 5')
//     it.next(result);
//     console.log('here 6')  
//   }
//   console.log('here 7')
//   go();
//   console.log('here 8')
// }

// run(function *(done) {
//   console.log('here 1')
//   const exercises = yield fs.readdir('.', done);
//   console.log('here 2')
//   console.log(exercises);
// });

/**
 * My first solution
 */

// const fs = require('fs');

// function run(generator) {
//   let it;
//   const go = (err, result) => {
//     it['next'](result);
//   };
//   it = generator(go);
//   go();
// }

// run(function *(done) {
//   let firstFile = null;
//   try {
//     const dirFiles = yield fs.readdir('NoNoNo', done);
//     firstFile = dirFiles[0];
//   } catch (err) {}
//   console.log(firstFile)
// })

/**
 * Official Solution
 */

// const fs = require('fs');

// function run (generator) {
//   const it = generator(go);
  
//   function go (err, result) {
//     if(err) return it.throw(err);
//     it.next(result);
//   }

//   go();
// }

// run(function *(done) {
//   let firstFile;
//   try {
//     let dirFiles = yield fs.readdir('NoNoNo', done);
//     firstFile = dirFiles[0];
//   } catch (err) {
//     firstFile = null;
//   }
//   console.log(firstFile);
// });

/**
 * My Second Solution
 */

const fs = require('fs');

const run = generatorCb => {
  let it;
  const go = (err, result) => {
    if(err) return it['throw'](err);
    it['next'](result);
  }
  it = generatorCb(go);
  go();
}

//generators cannot be arrow functions
const readdirGenerator = function *(done) {
  let firstFile;
  try {
    const dirFiles = yield fs.readdir('NoNoNo', done);
    firstFile = dirFiles[0];
  } catch (err) {
    firstFile = null;
  }
  console.log(firstFile);
}

run(readdirGenerator);
