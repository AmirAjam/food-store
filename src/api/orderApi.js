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

export {
    getUserOrdersApi,
}