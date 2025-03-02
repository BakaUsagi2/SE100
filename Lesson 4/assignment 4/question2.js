const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82];

// Write your code below
let sumofamdPrices = 0
for (let i=0; i < amdPrices.length; i++) {
    sumofamdPrices += amdPrices[i]
}
SMA = (sumofamdPrices / amdPrices.length).toFixed(2)
console.log(`The 7-day SMA of AMD is ${SMA}`)