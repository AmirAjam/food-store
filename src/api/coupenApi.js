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
const addCoupenApi = async (token, data) => {
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

const removeCoupenApi = async (token, id) => {
    const response = await axios.delete(`coupen/${id}`,
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    )
    return response.data
}

const editCoupenApi = async (token, id, data) => {
    const response = await axios.put(`coupen/${id}`,
        data,
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    )
    return response.data
}
const changeStatusCoupenApi = async (token, id) => {
    const response = await axios.patch("coupen/change-status",
        { coupenId: id },
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    )

    return response.data
}

const getCoupenInfoApi = async (token, id) => {
    const response = await axios.get(`coupen/${id}`,
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    )
    return response.data
}

export {
    getCoupensApi,
    addCoupenApi,
    removeCoupenApi,
    getCoupenInfoApi,
    editCoupenApi,
    changeStatusCoupenApi
}