import axios from "./axiosConfig"

const getTokensApi = async (token) => {
    const response = await axios.get("coupen",
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    )
    return response.data
}

export {
    getTokensApi,
}