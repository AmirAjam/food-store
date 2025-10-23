import axios from "./axiosConfig"

const getAddressesApi = async (token) => {
    const response = await axios.get("address",
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    )
    return response.data
}

const addAddressApi = async (token, data) => {
    const response = await axios.post("address",
        data,
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    )
    return response.data
}

const removeAddressApi = async (token, id) => {
    const response = await axios.delete(`address/${id}`,
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    )
    return response.data
}

export{
    getAddressesApi,
    addAddressApi,
    removeAddressApi,
}