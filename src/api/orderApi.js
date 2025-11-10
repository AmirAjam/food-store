import axios from "./axiosConfig"

const getUserOrdersApi = async (token) => {
    const response = await axios.get("order",
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    )
    return response.data
}

const getAllOrdersApi = async (token) => {
    const response = await axios.get("order/get-all",
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    )
    return response.data
}

const getOneOrderApi = async (token,id) => {
    const response = await axios.get(`order/${id}`,
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    )
    return response.data
}

const createOrdersApi = async (token,addressId,paymentMethod) => {
    const response = await axios.post("order",
        {addressId,paymentMethod},
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    )
    return response.data
}

const changeOrderStatusApi = async (token,id,status) => {
    console.log(status)
    const response = await axios.patch(`order/${id}/order-status`,
        {status},
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    )
    return response.data
}



export {
    getUserOrdersApi,
    createOrdersApi,
    getOneOrderApi,
    getAllOrdersApi,
    changeOrderStatusApi
}