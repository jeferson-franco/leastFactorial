function solution(n) {
    let factorial = 1;
    let i = 1;
    while (factorial < n) {
        factorial *= ++i;
    }
    return factorial;
}

module.exports = solution;

// npm init -y
// npm i jest-cli -g
// package.json: "scripts": { "test": "jest" }
// npm test leastFactorial

// alternative solution
