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

const uploadProducImageApi = async (token, id, file) => {
    console.log("file => ", file)
    const response = await axios.put(`product/${id}/gallery`,
        file,
        {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "multipart/form-data",
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

const publisProductApi = async (token, id) => {
    const response = await axios.patch(`product/${id}/publish`,
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        },
    )
    return response.data
}

const unpublisProductApi = async (token, id) => {
    const response = await axios.patch(`product/${id}/unpublish`,
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
    uploadProducImageApi,
    deleteProductApi,
    publisProductApi,
    unpublisProductApi,
}