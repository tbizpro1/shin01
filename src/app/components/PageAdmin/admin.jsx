import React, { useContext, useEffect, useState } from "react";
import TopBar from "../TopBar/topbar";
import LeftSideBar from "../LeftSideBar/leftsidebar";
import RightSideBar from "../RigthSideBar/rigthsidebar";
import MainContent from "../MainContent/maincontent";
import Inbox from "../Inbox/inbox";
import { useLocation } from "react-router";
import { AuthContext } from "../../context/authContext";
import allUserEnterprisePending from "../../api/get/all-user-enterprise-pending";
import allUsers from "../../api/get/all-users";

export default function Admin() {
        const [users, setUsers] = useState([])
        const { token } = useContext(AuthContext)
        useEffect(()=>{
            allUsers(token).then(
                response => setUsers(response)
            ).catch(error => console.log(error))
        }, [])
        return (
            <div className="theme-purple">
                <TopBar />
                <LeftSideBar />
                <RightSideBar />
                <section className="content inbox">
                    <Inbox users={users}/>

                </section>
            </div>
        )
}