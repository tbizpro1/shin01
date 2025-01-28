import React from "react";
import TopBar from "../../components/TopBar/topbar";
import LeftSideBar from "../../components/LeftSideBar/leftsidebar";
import RightSideBar from "../../components/RigthSideBar/rigthsidebar";
import Chat from "../../components/Chat/chat";
import { ContentStartup } from "../../components/ContentStartup/contentstartup";

export function StartupProfile() {
    return (
        <div className="theme-purple">
            <TopBar />
            <LeftSideBar />
            <RightSideBar />
            <Chat />
            <section className="content">
                <ContentStartup />
            </section>
        </div>
    )
}