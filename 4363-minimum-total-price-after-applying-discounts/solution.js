/**
 * @param {number[]} prices
 * @param {number[]} discounts
 * @return {number}
 */
var minPrice = function(prices, discounts) {
    prices.sort((a, b) => b-a)
    discounts.sort((a, b) => b-a)
    let totalPrice = 0

    for(let i=0; i<prices.length; i++){
        let price = discounts[i] ? (prices[i]*(100-discounts[i]))/100 : prices[i]

        totalPrice += price
    }

    return totalPrice
};
