const msftData = [
	[190.15, 196.21, 191.07, 194.44],
	[193.61, 195.89, 190.12, 193.40]
];

// Write your code below
let sumofMSFTClosingPrice = 0
for (let i=0; i < msftData.length; i++) {
	sumofMSFTClosingPrice += msftData[i][3]
}
averageClosingPrice = (sumofMSFTClosingPrice / 2).toFixed(2)
console.log(`Average closing price of MSFT is ${averageClosingPrice}`)