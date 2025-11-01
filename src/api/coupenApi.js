import axios from "./axiosConfig"

const getCoupensApi = async (token) => {
    const response = await axios.get("coupen",
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    )
    return response.data
}
const addCoupenApi = async (token,data) => {
    const response = await axios.post("coupen",
        data,
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    )
    return response.data
}
const removeCoupenApi = async (token,id) => {
    const response = await axios.delete(`coupen/${id}`,
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
    getCoupensApi,addCoupenApi
}