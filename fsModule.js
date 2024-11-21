const {readFileSync,writeFileSync} = require('fs')

const first = readFileSync('./content/subfolder/first.txt','utf8')

console.log(first);

const second = readFileSync('./content/subfolder/test.txt','utf8')

console.log(second);



writeFileSync('./content/sync-txt',`here is result : ${first},${second}`,{flag:"a"})


