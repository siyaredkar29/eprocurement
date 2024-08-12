import axios from "axios"

const setToken = (token) =>{
    localStorage.setItem("token",token);
};

const getToken = () =>{
    return localStorage.getItem("token");
};

const isAuth = async () => {
    try {

        const token = getToken();
        //console.log("TOKEN:",token);

        const res = await axios({
            method:"POST",
            url:"http://localhost:9000/users/isauth",
            headers :{ 
                Authorization:`Bearer ${token}`
            }
        });
        //console.log("res data:--",res.data);
        return true;

                
    } catch (error) {
        console.log(error.message);
        
        console.log("user not auth");
        return false;
        
        
    }
};

export{setToken,isAuth,getToken};