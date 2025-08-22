const calFinalPrice = (price,quantity) => {
    const finalPrice = ((100 - quantity) * price) / 100 
    return finalPrice
}

export{calFinalPrice}