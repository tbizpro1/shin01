// import { redirect } from 'react-router';
import { useContext, useEffect } from 'react';
import { AuthContext } from '../../context/authContext';
import Login from '../../pages/Signin/login';
import { useNavigate } from 'react-router-dom';

const ProtectedRouter = ({ page: Page }) => {
    const { isAuthentication, token } = useContext(AuthContext);
    let navigate = useNavigate();

    useEffect(()=>{
        if (!isAuthentication || token === null)  {
            console.log(isAuthentication, token)
            alert("Sua sessão expirou, realize login!")
            navigate("/")
        } 
    }, [])   

    return isAuthentication ? <Page /> : <Login/>;
};

export default ProtectedRouter;