// components/MailList.js
import React, { useCallback, useContext, useEffect, useState } from "react";
import allUsers from "../../api/get/all-users";
import { AuthContext } from "../../context/authContext";
import addUserEnterprise from "../../api/post/add-user-enterprise";
import allUserEnterprisePending from "../../api/get/all-user-enterprise-pending";

function MailList() {
    const [users, setUsers] = useState([]);
    const {user, token, enterprise} = useContext(AuthContext)
    const [partners, setPartners] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    console.log("teste", user)
    console.log("teste", enterprise)

    useEffect(() => {
        // Certifique-se de que `enterprise` está disponível antes de fazer chamadas.
        if (!enterprise?.[0]?.enterprise_id || !token) return;
    
        const fetchData = async () => {
            try {
                setIsLoading(true);
    
                // Obtém os parceiros pendentes
                const partnersResponse = await allUserEnterprisePending(enterprise[0].enterprise_id, token);
                const responseData = Array.isArray(partnersResponse) ? partnersResponse : [];
                const uniquePartners = responseData.filter(
                    (item, index, self) =>
                        index === self.findIndex(t => t.user_id === item.user_id)
                );
    
                console.log("uniquePartners", uniquePartners);
                setPartners(uniquePartners);
    
                // Obtém todos os usuários e filtra os que já foram convidados
                const allUsersResponse = await allUsers();
                const filteredUsers = allUsersResponse.filter(user =>
                    !uniquePartners.some(partner => partner.user_id === user.id)
                );
                setUsers(filteredUsers);
                setIsLoading(false)
            } catch (error) {
                console.error("Erro ao buscar dados:", error);
            } finally {
                setIsLoading(false);
            }
        };
    
        fetchData();
    }, [enterprise, token]); // Remova `partners` das dependências
    

    return (
        <section className="content inbox">
            {
                isLoading ?(
                    <div className="page-loader-wrapper">
                    <div className="loader">
                        <div className="m-t-30">
                            <img
                                className="zmdi-hc-spin"
                                src="src/assets/images/logo.svg"
                                width="48"
                                height="48"
                                alt="Compass"
                            />
                        </div>
                      <p>Carregando informações ...</p>
                    </div>
                  </div>
                ):(
                    <>
                        <div className="block-header">
                            <div className="row">
                            <div className="col-lg-7 col-md-6 col-sm-12">
                                <h2>Convidar Sócio</h2>
                                <small className="text-muted">Encaminhe solicitação de ingresso em sua startup!</small>
                            </div>
                            </div>
                        </div>
                        <div className="container-fluid">
                            <ul className="mail_list list-group list-unstyled">
                            {users?.map((mail) => (
                                <MailItem key={mail.id} mail={mail} />
                            ))}
                            </ul>
                        </div>
                    </>
                )
            }
        </section>
    );
}

export default MailList;

function MailItem({ mail }) {
    const [isClicked, setIsClicked] = useState(false);
    const {user, enterprise, token} = useContext(AuthContext)


    const handleButtonClick = useCallback((user_id) => {
        if (enterprise?.[0]?.enterprise_id) {
            setIsClicked(!isClicked);
            addUserEnterprise(user_id, enterprise[0].enterprise_id, token).then(
                response => console.log(response)
            );
        } else {
            console.error("Enterprise ID não disponível.");
        }
    }, [enterprise, token])

    return (
        <li className="list-group-item inbox-item-conteiner">
            <div className="media inbox-item-conteiner">
                <div className="pull-left inbox-item">
                    <div className="controls">
                        {/* <div className="checkbox">
                            <input type="checkbox" id="basic_checkbox_5" />
                            <label htmlFor="basic_checkbox_5"></label>
                        </div> */}
                    </div>
                    <div className="thumb hidden-sm-down m-r-20">
                        <img src="src/assets/images/xs/avatar5.jpg" className="rounded-circle" alt="" />
                    </div>
                </div>
                <div className="media-body">
                    <div className="media-heading">
                        <a href="mail-single.html" className="m-r-10">{mail.username}</a>
                        <span className="badge bg-green">Work</span>
                    </div>
                    <p className="msg">{mail.email + " | " + mail.linkedin}</p>
                </div>
                <td>
                    <button
                        className={`btn btn-default btn-icon btn-simple btn-icon-mini btn-round ${
                            isClicked ? "btn-success" : ""
                        }`}
                        onClick={() => handleButtonClick(mail.id)}
                    >
                        <i
                            className={`zmdi ${
                                isClicked ? "zmdi-check text-green" : "zmdi-check"
                            }`}
                        ></i>
                    </button>
                </td>
            </div>
        </li>
    );
}