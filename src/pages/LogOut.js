import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axiosInstance from "./axios";


const LogOut = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const response = axiosInstance.post('/logout/', {
            refresh_token: localStorage.getItem('refresh_token'),
        });
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        axiosInstance.defaults.headers['Authorization'] = null;
        navigate('/signIn')
    })

    return ( <div>Logout </div> );
}
 
export default LogOut;