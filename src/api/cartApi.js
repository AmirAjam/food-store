import axios from "./axiosConfig"

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
    addToCartApi,
}