const calFinalPrice = (price, quantity) => {
    const finalPrice = ((100 - quantity) * price) / 100
    return finalPrice
}

const findArrayIndex = (array, key) =>  array.findIndex(item => item._id === key)

const calAllOff = cartItem => {
    const finalPrice = calFinalPrice(cartItem.price , cartItem.product.quantity)
    const discountAmount = cartItem.price - finalPrice
    return discountAmount * cartItem.quantity
}

export { calFinalPrice,findArrayIndex,calAllOff }