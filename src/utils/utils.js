const calFinalPrice = (price, quantity) => {
    const finalPrice = ((100 - quantity) * price) / 100
    return finalPrice
}

const findArrayIndex = (array, key) => array.findIndex(item => item._id === key)

const calAllOff = cartItem => {
    const finalPrice = calFinalPrice(cartItem.price, cartItem.product.quantity)
    const discountAmount = cartItem.price - finalPrice
    return discountAmount * cartItem.quantity
}

const calDaysLeft = (target) => {
    const targetDate = new Date(target);
    const now = new Date();

    const diff = targetDate - now;

    const daysLeft = Math.floor(diff / (1000 * 60 * 60 * 24));

    return daysLeft
}
const DateCollection = (days) => {
    const now = new Date();
    now.setDate(now.getDate() + Number(days));

    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
}

export { calFinalPrice, findArrayIndex, calAllOff, calDaysLeft, DateCollection }