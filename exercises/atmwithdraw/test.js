const atmWithdraw = require('./index');

test('atmWithdraw function exists', () => {
    expect(typeof atmWithdraw).toEqual('function');
});

test('Finds what type of bills to dispense in an ATM', () => {
    expect(atmWithdraw(230)).toEqual([1, 1, 4]);
    expect(atmWithdraw(350)).toEqual([3, 1, 0]);
});

test('Works with numbers in the string', () => {
    expect(atmWithdraw(520)).toEqual([5, 0, 1]);
});
