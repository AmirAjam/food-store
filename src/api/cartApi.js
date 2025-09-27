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

export {
    getCartApi,
    addToCartApi,
}