import axios from "./axiosConfig"

const getCartApi = async (token) => {
    const response = await axios.get("cart",
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    )
    return response.data
}

const addToCartApi = async (token, data) => {
    const response = await axios.post("cart/add",
        data,
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    )
    return response.data
}

const updateCartApi = async (token, data) => {
    const response = await axios.patch("cart/update",
        data,
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    )
    return response.data
}

const deleteCartItemApi = async (token, productId) => {
    const response = await axios.delete("cart/remove",
        {
            data: { productId },
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    )
    return response.data
}

const clearCartApi = async (token) => {
    console.log("response")
    const response = await axios.delete("cart/clear",
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    )
    console.log(response)
    return response.data
}

export {
    getCartApi,
    addToCartApi,
    updateCartApi,
    deleteCartItemApi,
    clearCartApi
}