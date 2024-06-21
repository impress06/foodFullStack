import axios from "axios";


function useAxios() {
    const token = localStorage.getItem("token"); 
    console.log("token",token)

    const axiosWithToken = axios.create({
        baseURL: import.meta.env.VITE_BASE_URL,
    
        headers: { Authorization: `Token ${token}` } 
       
    });

    const axiosPublic = axios.create({
        baseURL: import.meta.env.VITE_APP_BASE_URL
    });

    return { axiosPublic, axiosWithToken };
}

export default useAxios;
