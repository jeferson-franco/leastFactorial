const solution = require('./leastFactorial.js');

test('test 1', () => {
    expect(solution(17)).toBe(24);
});

test('test 2', () => {
    expect(solution(1)).toBe(1);
});

test('test 3', () => {
    expect(solution(5)).toBe(6);
});

test('test 4', () => {
    expect(solution(25)).toBe(120);
});

test('test 5', () => {
    expect(solution(18)).toBe(24);
});

test('test 6', () => {
    expect(solution(109)).toBe(120);
});

test('test 7', () => {
    expect(solution(106)).toBe(120);
});

test('test 8', () => {
    expect(solution(11)).toBe(24);
});

test('test 9', () => {
    expect(solution(55)).toBe(120);
});

test('test 10', () => {
    expect(solution(24)).toBe(24);
});
