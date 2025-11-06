import axios from "./axiosConfig"

const getUserOrdersApi = async (token) => {
    const response = await axios.get("order",
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    )
    return response.data
}
const createOrdersApi = async (token,addressId,paymentMethod) => {
    const response = await axios.post("order",
        {addressId,paymentMethod},
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    )
    return response.data
}

export {
    getUserOrdersApi,
    createOrdersApi
}