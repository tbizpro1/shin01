import React from "react";
import TopBar from "../TopBar/topbar";
import LeftSideBar from "../LeftSideBar/leftsidebar";
import RightSideBar from "../RigthSideBar/rigthsidebar";
import Chat from "../Chat/chat";
import { ContentStartup } from "../ContentStartup/contentstartup";
import { ContentStartupHome } from "../HomeStartup/startupcontent";

export function HomeStartup() {
    return (
        <div className="theme-purple">
            <TopBar />
            <LeftSideBar />
            <RightSideBar />
            <Chat />
            <section className="content">
                {/* <ContentStartup /> */}
                <ContentStartupHome />
            </section>
        </div>
    )
}