const {readFileSync, writeFileSync} = require('fs');

const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')

console.log(first, second);

writeFileSync(
    './content/result-sync.txt',
    `Here is the result ${first}, ${second}`,
    { flag: 'a'}
)
//Add a file called result-sync.txt to given location with the text after the comma in th file
//Even after modifying it if we refresh it will remain the original