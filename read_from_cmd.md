# READ FILES

`READ FROM CMD AND WRITE TO IT`

```
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("which programming language do you like?", (answer) => {
    console.log(answer);
    rl.close()
});

```