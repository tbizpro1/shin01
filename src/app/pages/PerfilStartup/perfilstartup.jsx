import React, { useEffect, useState } from "react";
import TopBar from "../../components/TopBar/topbar";
import LeftSideBar from "../../components/LeftSideBar/leftsidebar";
import RightSideBar from "../../components/RigthSideBar/rigthsidebar";
import Chat from "../../components/Chat/chat";
import { ContentStartup } from "../../components/ContentStartup/contentstartup";
import { useLocation } from "react-router-dom";

export function StartupProfile() {
        const [enterprise, setEnterprise] = useState(null)
        const location = useLocation();
        const enter = location.state?.enter; 
    
        useEffect(()=>{
            console.log("texto")
            setEnterprise(enter)
            console.log("empre edit: ", enterprise)
        },[])
    return (
        <div className="theme-purple">
            <TopBar />
            <LeftSideBar />
            <RightSideBar />
            {/* <Chat /> */}
            <section className="content">
                <ContentStartup enterprise={enterprise} />
            </section>
        </div>
    )
}