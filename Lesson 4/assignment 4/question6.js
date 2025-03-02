// Modify the code below:

const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82]

sortedPrices = amdPrices.sort((a, b) => a - b)
data = sortedPrices.slice(0,3)
console.log(`The three lowest prices are ${data[0]}, ${data[1]} and ${data[2]}`)




//let data = []
//let minPrice = amdPrices[0]
//for (let i=0; i < 3; i++) {
//    for (let i=0; i < amdPrices.length; i++) {
//        if (minPrice > amdPrices[i]){
//            minPrice = amdPrices[i]
//            data.push(minPrice)
//            index = amdPrices.indexOf(minPrice)
//            amdPrices.splice(index , 1)
//        }
//    }
//}
//console.log(data)

// for some reason ^ this code cannot accurately find the 3 lowest values of the amdPrices array. May I know why?