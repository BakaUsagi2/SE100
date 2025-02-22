const bacData = [190.15, 194.21, 191.07, 192.44, 129000];

// Write your code below
const bacDataArray = [['low', 190.15],  ['high', 194.21], ['open', 191.07], ['close', 192.44], ['volume', 129000]]
const bacDataObj = Object.fromEntries(bacDataArray)
console.log(bacDataObj)

if (bacDataObj['close'] > bacDataObj['open']) {
    if (bacDataObj['volume'] > 100000) {
        console.log("Strong Bullish")
    } else {
        console.log("Bullish")
    }
}
if (bacDataObj['close'] < bacDataObj['open']) {
    if (bacDataObj['volume'] > 10000) {
        console.log("Strong Bullish")
    } else {
        console.log("Bullish")
    }
}
if (bacDataObj['close'] === bacDataObj['open']) {
    console.log("neutral")
}