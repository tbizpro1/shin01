import React, { useEffect, useState } from "react";
import TopBar from "../../components/TopBar/topbar";
import RightSideBar from "../../components/RigthSideBar/rigthsidebar";
import Chat from "../../components/Chat/chat";
import { ContentStartupHome } from "../../components/HomeStartup/startupcontent";
import { useLocation } from "react-router-dom";
import LeftSideBar from "../../components/LeftSideBarStartup/leftsidebar";


export function HomeStartup() {
    const [enterprise, setEnterprise] = useState(null)
    const location = useLocation();
    const enter = location.state?.enter; 

    useEffect(()=>{
        console.log("texto")
        setEnterprise(enter)
    },[])
    console.log("empre: ", enterprise)
    return (
        <div className="theme-purple">
            <TopBar />
            <LeftSideBar enter={enterprise}/>
            <RightSideBar />
            <Chat />
            <section className="content">
                {/* <ContentStartup /> */}
                <ContentStartupHome enterprise={enterprise} />
            </section>
        </div>
    )
}