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
    console.log(data)

    const response = await axios.post("product",
        data,
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
    getProductsApi,
    createProductApi
}