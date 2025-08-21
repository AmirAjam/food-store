import axios from "./axiosConfig"

const getCategoryApi = async (token) => {
    try {
        const response = await axios.get("category",
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        )
        return response.data
    } catch (err) {
        return err.response
    }
}

const createCategoryApi = async (token, data) => {
    const response = await axios.post("category",
        data,
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    )
    return response.data
}
const editCategoryApi = async (token, id, data) => {
    const response = await axios.put(`category/${id}`,
        data,
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    )
    return response.data
}

const removeCategoryApi = async (token, id) => {
    const response = await axios.delete(`category/${id}`,
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    )
    return response.data
}

const getCategoryInfoApi = async (token, id) => {
    const response = await axios.get(`category/${id}`,
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    )
    return response.data
}

export {
    getCategoryApi,
    createCategoryApi,
    removeCategoryApi,
    getCategoryInfoApi,
    editCategoryApi
}