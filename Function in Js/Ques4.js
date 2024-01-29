function calculateTax(income) {
    
    const taxRates = [
        { range: 10000, rate: 0.1 },
        { range: 30000, rate: 0.15 },
        { range: 70000, rate: 0.2 },
        { range: Infinity, rate: 0.25 }
    ];

   
    const applicableRate = taxRates.find(rate => income <= rate.range);

    
    const taxAmount = applicableRate ? income * applicableRate.rate : 0;

    return taxAmount;
}


const income1 = 8000;
console.log(`Income: $${income1}, Tax: $${calculateTax(income1)}`);

const income2 = 25000;
console.log(`Income: $${income2}, Tax: $${calculateTax(income2)}`);

const income3 = 50000;
console.log(`Income: $${income3}, Tax: $${calculateTax(income3)}`);

const income4 = 100000;
console.log(`Income: $${income4}, Tax: $${calculateTax(income4)}`);

