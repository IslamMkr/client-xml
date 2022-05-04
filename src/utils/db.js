import axios from "axios";

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL_DEV
})

exports.getHomePage = async () => {
    try {
        var res = await axiosInstance.get("/")
        
        return await res.data
    } catch (err) {
        console.log(err)
        return JSON.stringify(err)
    }
}