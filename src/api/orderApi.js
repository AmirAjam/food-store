import axios from "./axiosConfig"

const createOrderApi = async (paymentMethod,addressId) => {
    const response = await axios.get("address",
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    )
    return response.data
}