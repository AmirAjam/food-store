import axios from "./axiosConfig"

const getFavoriteApi = async (token, id) => {
    const response = await axios.get(`user/wishlist/${id}`,
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    )
    return response.data
}
const AddToFavoriteApi = async (token, productId) => {
    const response = await axios.put("product/whishlist",
        {productId},
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    )
    return response.data
}

export {
    getFavoriteApi,
    AddToFavoriteApi
}