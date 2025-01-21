import React, { useCallback, useContext, useEffect, useState } from "react";
import allUsers from "../../api/get/all-users";
import { AuthContext } from "../../context/authContext";
import SeachTopBar from "./SeachTopBar/SeachTopBar";
import ContactTable from "./ContactTable/ContactTable";
import allUserEnterprisePending from "../../api/get/all-user-enterprise-pending"

export default function Inbox() {
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const { user, token, enterprise } = useContext(AuthContext);
    const [partners, setPartners] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (!enterprise?.[0]?.enterprise_id || !token) return;

        const fetchData = async () => {
            try {
                setIsLoading(true);

                const partnersResponse = await allUserEnterprisePending(enterprise[0].enterprise_id, token);
                const responseData = Array.isArray(partnersResponse) ? partnersResponse : [];
                const uniquePartners = responseData.filter(
                    (item, index, self) =>
                        index === self.findIndex((t) => t.user_id === item.user_id)
                );

                setPartners(uniquePartners);

                const allUsersResponse = await allUsers();
                const filteredUsers = allUsersResponse.filter((user) =>
                    !uniquePartners.some((partner) => partner.user_id === user.id)
                );
                setUsers(filteredUsers);
                setFilteredUsers(filteredUsers);
                setIsLoading(false);
            } catch (error) {
                console.error("Erro ao buscar dados:", error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, [enterprise, token]);

    useEffect(() => {
        setFilteredUsers(
            users.filter((user) =>
                user.email.toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
    }, [searchTerm, users]);

    return (
        <section>
            {
                enterprise?.[0]?.enterprise_id !== undefined ?
                    (
                        <>
                            <div className="block-header">
                                <div className="row">
                                    <div className="col-lg-7 col-md-6 col-sm-12">
                                        <h2>
                                            Convidar sócios
                                            <small className="text-muted">Encaminhe convites diretamente, via e-mail!</small>
                                        </h2>
                                    </div>
                                </div>
                            </div>
                            <div className="container-fluid content">
                                <SeachTopBar users={users} setSearchTerm={setSearchTerm} />
                                <ContactTable users={filteredUsers} />
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="block-header">
                                <div className="row">
                                    <div className="col-lg-7 col-md-6 col-sm-12">
                                        <h2>
                                            Invites
                                            <small className="text-muted">Welcome to Shin</small>
                                        </h2>
                                    </div>
                                    {/* <div className="col-lg-5 col-md-6 col-sm-12">
                                        <button
                                            className="btn btn-primary btn-icon btn-round hidden-sm-down float-right m-l-10"
                                            type="button"
                                        >
                                            <i className="zmdi zmdi-plus"></i>
                                        </button>
                                        <ul className="breadcrumb float-md-right">
                                            <li className="breadcrumb-item">
                                                <a href="index.html">
                                                    <i className="zmdi zmdi-home"></i> Shin
                                                </a>
                                            </li>
                                            <li className="breadcrumb-item">
                                                <a href="javascript:void(0);">Agents</a>
                                            </li>
                                            <li className="breadcrumb-item active">All Agents</li>
                                        </ul>
                                    </div> */}
                                </div>
                            </div>
                            <div className="container-fluid d-flex justify-content-center align-items-center ">
                                <div className="row clearfix text-center ">
                                    <p>
                                        Você não tem vínculo com nenhuma startup no momento!
                                    </p>
                                </div>
                            </div>
                        </>
                    )
            }
        </section>
    );
}
