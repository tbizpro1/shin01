
// import { redirect } from 'react-router';
import { useContext, useEffect } from 'react';
import { AuthContext } from '../../context/authContext';
import Login from '../../pages/Signin/login';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const ProtectedRouter = ({ page: Page }) => {
    const { isAuthentication } = useContext(AuthContext);
    let navigate = useNavigate();

    useEffect(() => {
        let userId = Cookies.get('user_id')
        let token = Cookies.get('token')

        if (!token || !userId) {
            // console.log(isAuthentication, token)
            alert("Sua sessão expirou, realize login!")
            navigate("/")
        }
    }, [isAuthentication, navigate])

    return isAuthentication ? <Page /> : <Login />;
};

export default ProtectedRouter;