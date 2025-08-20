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

const getOneUserApi = async (id) => {
    try {
        const response = await axios.get(`user/${id}`)
        console.log(response)
        return response.data
    } catch (err) {
        return err.response
    }
}
export { getUsers, deleteUserApi, signupApi,getOneUserApi }