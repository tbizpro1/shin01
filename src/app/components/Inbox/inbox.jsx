// import React, { useCallback, useContext, useEffect, useState } from "react";
// import allUsers from "../../api/get/all-users";
// import { AuthContext } from "../../context/authContext";
// import SeachTopBar from "./SeachTopBar/SeachTopBar";
// import ContactTable from "./ContactTable/ContactTable";
// import allUserEnterprisePending from "../../api/get/all-user-enterprise-pending"

// export default function Inbox({users}) {
//     const [searchTerm, setSearchTerm] = useState("");
//     const [filteredUsers, setFilteredUsers] = useState([])

//     useEffect(() => {
//         setFilteredUsers(
//             users.filter((user) =>
//                 user.email.toLowerCase().includes(searchTerm.toLowerCase())
//             )
//         );
//     }, [searchTerm, users]);

//     return (
//         <section>
//             <>
//                 <div className="theme-purple">
//                     <div className="block-header">
//                         <div className="row">
//                             <div className="col-lg-7 col-md-6 col-sm-12">
//                                 <h2>
//                                     Novos ingressantes 
//                                     <small className="text-muted">Aceite ou recuse novos ingressante para utilizarem a plataforma!</small>
//                                 </h2>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="container-fluid content">
//                         <SeachTopBar users={users} setSearchTerm={setSearchTerm} />
//                         <ContactTable users={filteredUsers}  />
//                     </div>
//                 </div>
//             </>
//         </section>
//     );
// }

import React, { useCallback, useContext, useEffect, useState } from "react";
import allUsers from "../../api/get/all-users";
import { AuthContext } from "../../context/authContext";
import SeachTopBar from "./SeachTopBar/SeachTopBar";
import ContactTable from "./ContactTable/ContactTable";
import allUserEnterprisePending from "../../api/get/all-user-enterprise-pending";

export default function Inbox({ users }) {
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredUsers, setFilteredUsers] = useState([]);

    useEffect(() => {
        // Verifique se users é um array antes de usar filter
        if (Array.isArray(users)) {
            setFilteredUsers(
                users.filter((user) =>
                    user.email.toLowerCase().includes(searchTerm.toLowerCase())
                )
            );
        } else {
            console.error("Users não é um array:", users);
            setFilteredUsers([]); // Defina como array vazio em caso de erro
        }
    }, [searchTerm, users]);

    return (
        <section>
            <>
                <div className="theme-purple">
                    <div className="block-header">
                        <div className="row">
                            <div className="col-lg-7 col-md-6 col-sm-12">
                                <h2>
                                    Novos ingressantes
                                    <small className="text-muted">Aceite ou recuse novos ingressantes para utilizarem a plataforma!</small>
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid content">
                        <SeachTopBar users={users} setSearchTerm={setSearchTerm} />
                        <ContactTable users={filteredUsers} />
                    </div>
                </div>
            </>
        </section>
    );
}
