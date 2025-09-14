const calFinalPrice = (price, quantity) => {
    const finalPrice = ((100 - quantity) * price) / 100
    return finalPrice
}

const findArrayIndex = (array, key) =>  array.findIndex(item => item._id === key)

export { calFinalPrice,findArrayIndex }