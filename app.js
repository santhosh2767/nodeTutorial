// console.log('my first node');

// console.log(__dirname);
// console.log(__filename);
// console.log(require);
// console.log(module);
// console.log(process);

const name = require('./app1.js');
const say = require('./app2.js');
const data = require('./app3.js');

console.log(name);
console.log(data);

say('sk')
say('john')
say(name.john)


