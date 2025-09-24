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

const editProductApi = async (token, id, data) => {
    const response = await axios.put(`product/${id}`,
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

const removeProductImageApi = async (token, id, imageUrl) => {
    const response = await axios.delete(`product/${id}/gallery`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            data: {
                imageUrl
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

const getProductsCategoryApi = async (id) => {
    const response = await axios.get(`category/${id}/products`)
    return response.data
}



export {
    getProductsApi,
    createProductApi,
    editProductApi,
    uploadProducImageApi,
    removeProductImageApi,
    deleteProductApi,
    publisProductApi,
    unpublisProductApi,
    getProductsCategoryApi,
}