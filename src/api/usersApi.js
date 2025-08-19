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

const deleteUserApi = async (token,id) => {
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

export { getUsers,deleteUserApi }