import React, { useState } from "react";
import TopBar from "../../components/TopBar/topbar";
import LeftSideBar from "../../components/LeftSideBar/leftsidebar";
import RightSideBar from "../../components/RigthSideBar/rigthsidebar";
import Chat from "../../components/Chat/chat";
import MainContent from "../../components/MainContent/maincontent";
import { AuthContext } from "../../context/authContext";
import { useContext } from "react";
import { useEffect } from "react";
import { GetUser } from "../../api/get/user-profile";

const Home = () => {
const [user, setUser] = useState(null)
//extrai o token de authenticacao
const {token, userId} = useContext(AuthContext)
console.log(token)

// useEffect(() => {
//     GetUser(userId, token).then(response=>setUser(response.data))

// },[])

    return (
        <div className="theme-purple">
            {/* <div className="overlay" style={{display:'none'}}></div> */}
            <TopBar />
            <LeftSideBar/>
            <RightSideBar />
            <Chat />
            <MainContent />
        </div>
    )
}

export default Home