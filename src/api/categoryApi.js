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

export {getCategoryApi}