import axios from "./axiosConfig"

const getUsers = async (token) => {
    try {
        const response = await axios.get("user/all-users",
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

const signupApi = async (data) => {
    const response = await axios.post(`auth/register`,
        data
    )
    return response.data
}

const deleteUserApi = async (token, id) => {
    try {
        const response = await axios.delete(`user/${id}`,
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
const blockUserApi = async (token, id) => {
    try {
        const response = await axios.patch(`user/block/${id}`,
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
const changeUserRoleApi = async (token, id) => {
    try {
        const response = await axios.patch(`user/${id}/change-role`,
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
const unBlockUserApi = async (token, id) => {
    try {
        const response = await axios.patch(`user/unblock/${id}`,
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

const getOneUserApi = async (id) => {
    try {
        const response = await axios.get(`user/${id}`)
        return response.data
    } catch (err) {
        return err.response
    }
}

const editUserApi = async (token, id, data) => {
    const response = await axios.put(`user/${id}`,
        data,
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    )
    return response.data
}

const editUserInfoApi = async (token, data) => {
    const response = await axios.put(`user/edit`,
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
    getUsers,
    deleteUserApi,
    signupApi,
    getOneUserApi,
    editUserApi,
    blockUserApi,
    unBlockUserApi,
    changeUserRoleApi,
    editUserInfoApi
}