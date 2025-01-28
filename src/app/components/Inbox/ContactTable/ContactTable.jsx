import { useCallback, useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../../context/authContext';
import addUserEnterprise from '../../../api/post/add-user-enterprise';
import { perfilUnd, logo } from "../../../../assets/images/index";

export const Partner = ({ userid, name, profession, number, email, profile_picture }) => {
    const [isClicked, setIsClicked] = useState(false);
    const { enterprise, token } = useContext(AuthContext)


    const handleButtonClick = useCallback((userid) => {
        if (enterprise?.[0]?.enterprise_id) {
            setIsClicked(!isClicked);
            addUserEnterprise(userid, enterprise[0].enterprise_id, token).then(
                response => console.log(response)
            );
        } else {
            console.error("Enterprise ID não disponível.");
        }
    }, [enterprise, token])
    // console.log(name, profile_picture)
    return (
        <tr>
            {/* <td>
                <div class="checkbox">
                    <input id="delete_2" type="checkbox" />
                    <label for="delete_2">&nbsp;</label>
                </div>
            </td> */}
            <td >
                <img src={profile_picture || perfilUnd} className="image-invite" alt="" />
            </td>

            <td>
                <p style={{marginTop: '16px'}}>{name} <span className="badge badge-default m-l-10 hidden-sm-down">{profession}</span></p>
            </td>

            <td>
                <p  style={{marginTop: '16px'}} ><i className="zmdi zmdi-phone m-r-10"></i>{number}</p>
            </td>
            <td>
                <p style={{marginTop: '16px'}}><a href="" title=""><i className="zmdi zmdi-email m-r-5"></i> {email} </a></p>
            </td>
            {/* <td>
                <address><i class="zmdi zmdi-pin"></i>123 6th St. Melbourne, FL 32904</address>
            </td> */}
            <td>
                <button
                    className={`btn btn-default btn-icon btn-simple btn-icon-mini btn-round ${isClicked ? "btn-success" : ""
                        }`}
                    onClick={() => handleButtonClick(userid)}
                >
                    <i
                        className={`zmdi ${isClicked ? "zmdi-check text-green" : "zmdi-check"
                            }`}
                    ></i>
                </button>
                <button className="btn btn-default btn-icon btn-simple btn-icon-mini btn-round"><i className="zmdi zmdi-delete"></i></button>
            </td>
        </tr>
    )
}

export default function ContactTable({ users }) {
    // console.log(users)
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500); // loader será mostrado por 1.5s

        return () => clearTimeout(timer);
    }, [users]);

    if (isLoading) {
        return (
            <div className="page-loader-wrapper">
                <div className="loader">
                    <div className="m-t-30">
                        <img className="zmdi-hc-spin rounded-circle" src={logo} width="48" height="48" alt="Compass" />
                    </div>
                    <p>Buscando usuários...</p>
                </div>
            </div>
        );
    }

    if (Array.isArray(users) && users.length === 0) {
        return (
            <>
                <div className="block-header">
                    <div className="row">
                        <div className="col-lg-7 col-md-6 col-sm-12">
                            <h2>
                                Invites
                                <small className="text-muted">Bem-vindo(a) a Shin</small>
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="container-fluid d-flex justify-content-center align-items-center">
                    <div className="row clearfix text-center">
                        <p>Você não enviou nenhum convite até o momento!</p>
                    </div>
                </div>
            </>
        );
    }

    return (
        <div className="row clearfix">
            <div className="col-lg-12">
                <div className="card">
                    <div className="body table-responsive">
                        <table className="table table-hover m-b-0 c_list text-center">
                            <thead>
                                <tr>
                                    <th >#</th>
                                    <th >Nome</th>
                                    <th data-breakpoints="xs">Telefone</th>
                                    <th data-breakpoints="xs sm md">Email</th>
                                    {/* <th data-breakpoints="xs sm md">Endereço</th> */}
                                    <th data-breakpoints="xs">Ações</th>
                                </tr>
                            </thead>

                            <tbody>
                                {Array.isArray(users) &&
                                    users.map((user, index) => (
                                        // console.log(user)
                                        <Partner
                                            key={user?.id || index} // Adicionado para garantir uma key única
                                            userid={user?.id}
                                            profile_picture={user?.profile_picture}
                                            name={user?.username}
                                            number={user?.phone}
                                            email={user?.email}
                                            profession={user?.profession}
                                            // address={user?.address || ""} // Ajuste do endereço
                                        />
                                    ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
};
