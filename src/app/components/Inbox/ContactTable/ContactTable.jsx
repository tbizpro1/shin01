
import { useCallback, useContext, useState } from 'react';
import { AuthContext } from '../../../context/authContext';
import addUserEnterprise from '../../../api/post/add-user-enterprise';
import { backgroundLogin, logoShin, logoLoader, simao } from "../../../../assets/images/index";

export const Partner = ({userid, name,profession, number, email, profile_image}) => {
    const [isClicked, setIsClicked] = useState(false);
    const { enterprise, token} = useContext(AuthContext)


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
    return (
        <tr className='display-flex justify-content-row'>
            <td>
                <img src={profile_image} class="rounded-circle avatar" alt=""/>
            </td>
            <td>
                <p class="c_name">{name} <span class="badge badge-default m-l-10 hidden-sm-down">{profession}</span></p>
            </td>
            <td>
                <span class="phone"><i class="zmdi zmdi-phone m-r-10"></i>{number}</span>
            </td>
            <td>
                <span class="email"><a href="javascript:void(0);" title=""><i class="zmdi zmdi-email m-r-5"></i> {email} </a></span>
            </td>
            <td>
                <button
                    className={`btn btn-default btn-icon btn-simple btn-icon-mini btn-round ${
                        isClicked ? "btn-success" : ""
                    }`}
                    onClick={() => handleButtonClick(userid)}
                >
                    <i
                        className={`zmdi ${
                            isClicked ? "zmdi-check text-green" : "zmdi-check"
                        }`}
                    ></i>
                </button>
                    <button className="btn btn-default btn-icon btn-simple btn-icon-mini btn-round"><i className="zmdi zmdi-delete"></i></button>
            </td>
        </tr>
    )
}

export default function ContactTable({users}) {
    // console.log(users)
    if (Array.isArray(users) && users.length === 0) {
        return (
            <div className="page-loader-wrapper">
                <div className="loader">
                    <div className="m-t-30">
                        <img className="zmdi-hc-spin" src={logoLoader} width="48" height="48" alt="Compass" />
                    </div>
                    <p>Buscando usuários...</p>
                </div>
            </div>
        );
    }

    return(
        <div className="row clearfix">
        <div className="col-lg-12">
            <div className="card">
                <div className="body table-responsive">
                    <table className="table table-hover m-b-0 c_list">
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th data-breakpoints="xs">Telefone</th>
                                <th data-breakpoints="xs sm md">Email</th>
                                <th data-breakpoints="xs sm md">Endereço</th>
                                <th data-breakpoints="xs">Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Array.isArray(users) &&
                                users.map((user, index) => (
                                    <Partner
                                        key={user?.id || index} // Adicionado para garantir uma key única
                                        userid={user?.id}
                                        profile_image={user?.profile_image}
                                        name={user?.username}
                                        number={user?.phone}
                                        email={user?.email}
                                        profession={user?.profession}
                                        address={user?.address || "123 6th St. Melbourne, FL 32904"} // Ajuste do endereço
                                    />
                                ))}
                        </tbody>
                    </table>
                </div>
            </div>
            {/* <div className="card">
                <div className="body">
                    <ul className="pagination pagination-primary m-b-0">
                        <li className="page-item">
                            <a className="page-link" href="#">
                                <i className="zmdi zmdi-arrow-left"></i>
                            </a>
                        </li>
                        <li className="page-item active">
                            <a className="page-link" href="#">1</a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#">2</a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#">3</a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#">4</a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#">
                                <i className="zmdi zmdi-arrow-right"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div> */}
        </div>
    </div>
    )
};
