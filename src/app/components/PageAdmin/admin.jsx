// import React, { useContext, useEffect, useState } from "react";
// import TopBar from "../TopBar/topbar";
// import LeftSideBar from "../LeftSideBar/leftsidebar";
// import RightSideBar from "../RigthSideBar/rigthsidebar";
// import MainContent from "../MainContent/maincontent";
// import Inbox from "../Inbox/inbox";
// import { useLocation } from "react-router";
// import { AuthContext } from "../../context/authContext";
// import allUserEnterprisePending from "../../api/get/all-user-enterprise-pending";
// import allUsers from "../../api/get/all-users";

// export default function Admin() {
//         const [users, setUsers] = useState([])
//         const { token } = useContext(AuthContext)
//         useEffect(()=>{
//             allUsers(token).then(
//                 response => setUsers(response)
//             ).catch(error => console.log(error))
//         }, [])
//         return (
//             <div className="theme-purple">
//                 <TopBar />
//                 <LeftSideBar />
//                 <RightSideBar />
//                 <section className="content inbox">
//                     <Inbox users={users}/>

//                 </section>
//             </div>
//         )
// }

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
import LeftSideBarAdmin from "../LeftSideBarAdmin/leftsidebaradmin";

export default function Admin() {
    const [users, setUsers] = useState([]); // inicialize como array vazio
    const { token } = useContext(AuthContext);

    useEffect(() => {
        allUsers(token)
            .then(response => {
                // garanta que response seja um array
                if (Array.isArray(response)) {
                    setUsers(response);
                } else {
                    console.error("A API não retornou um array:", response);
                    setUsers([]); // defina como array vazio em caso de erro
                }
            })
            .catch(error => {
                console.error("Erro ao buscar usuários:", error);
                setUsers([]); // defina como array vazio em caso de erro
            });
    }, [token]);

    return (
        <div className="theme-purple">
            <TopBar />
            <LeftSideBarAdmin />
            <RightSideBar />
            <section className="content inbox">
                <Inbox users={users} />
            </section>
        </div>
    );
}