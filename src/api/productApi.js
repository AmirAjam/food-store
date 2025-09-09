import axios from "./axiosConfig"

const getProductsApi = async (token) => {
    const response = await axios.get("product/get-all",
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    )
    return response.data
}

const createProductApi = async (token, data) => {
    const response = await axios.post("product",
        data,
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    )
    return response.data
}

const deleteProductApi = async (token, id) => {
    const response = await axios.delete(`product/${id}`,
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        },
    )
    return response.data
}

export {
    getProductsApi,
    createProductApi,
    deleteProductApi
}