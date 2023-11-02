// --- Directions
// An ATM ran out of 10 dollar bills and only has 
// 100, 50 and 20 dollar bills.

// Given an amount between 40 and 10000 dollars(inclusive) 
// and assuming that the ATM wants to use as few bills as possible, 
//determinate the minimal number of 100, 50 and 20 dollar bills 
// the ATM needs to dispense(in that order).
//Example: 
// amount = 250, output: [2, 1, 0]
// amount = 370, output: [3, 1, 1]


function atmWithdraw(amount) {
    let hundredNotes = 0;
    let fiftyNotes = 0; 
    let twentyNotes = 0; 

    while (amount >= 20) {
        if (amount >= 100 && ((amount % 100) % 50 === 0 || (amount % 100) % 20 === 0)
        ) {
    amount -= 100; 
    hundredNotes++; 
    } else if (
        amount >= 50 && 
        ((amount % 50) % 100 === 0 || (amount % 50) % 20 === 0)
    ) {
        amount -= 50;
        fiftyNotes++;
    } else {
        amount -= 20; 
        twentyNotes++;
        }
    }
    return [hundredNotes, fiftyNotes, twentyNotes];
}

module.exports = atmWithdraw;