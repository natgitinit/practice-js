const linkedPalindrome = require('./index');

test('palindrome function is defined', () => {
    expect(typeof palindrome).toEqual('function');
});

test('"121" is a palindrome', () => {
    expect(palindrome('121')).toBeTruthy();
});

test('" 135" is not a palindrome', () => {
    expect(palindrome(' 135')).toBeFalsy();
});

test('"1000000001" a palindrome', () => {
    expect(palindrome('1000000001')).toBeTruthy();
});