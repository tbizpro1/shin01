import { useLocation } from "react-router-dom";
import Chat from "../../components/Chat/chat";
import Inbox from "../../components/Inbox/inbox";
import MailList from "../../components/Inbox/inbox";
import RightSideBar from "../../components/RigthSideBar/rigthsidebar";
import TopBar from "../../components/TopBar/topbar";
import { useEffect, useState } from "react";
import LeftSideBar from "../../components/LeftSideBarStartup/leftsidebar";

export default function InvitePage() {
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
            <LeftSideBar/>
            <RightSideBar />
            <Chat />
            <section className="content inbox">
                <Inbox enterprise={enterprise}/>
            </section>
        </div>
    )
};
