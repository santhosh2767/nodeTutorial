const path = require('path');
console.log(path.sep);

const filePath = path.join('/content','subfolder','test.txt');
console.log(filePath);

const filePath1 = path.join('/content/','subfolder','test.txt');
console.log(filePath1)

const base = path.basename(filePath)
console.log(base);

const absolute = path.resolve(__dirname,"content",'subfolder','test.txt')
console.log(absolute);
