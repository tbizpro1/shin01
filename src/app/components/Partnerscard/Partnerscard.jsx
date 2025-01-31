import { useEffect, useState } from "react";
import useGetUser from "../../hooks/get-user-by-id";
import usePartners from "../../hooks/get_partners_by_id";
import { Link } from "react-router";

export function PartenrsCard({ enterprise_id, token }) {
    const partners = usePartners(enterprise_id, token);

    return (
        <div>
            <div className="card">
                <div className="header">
                    <h2 style={{ fontSize: "1rem" }}><strong>Equipe</strong></h2>
                </div>
                <div className="body">
                    <ul className="inbox-widget list-unstyled clearfix">
                        {partners && partners.map((partner) => (
                                <PartnerItem key={partner.user_id} userId={partner.user_id} token={token} />
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

// Componente para exibir cada parceiro individualmente
const PartnerItem = ({ userId, token }) => {
    console.log("datao",userId, token)
    const { user, isLoading, error } = useGetUser(userId, token);

    if (isLoading) return <li>Carregando...</li>;
    if (error) return <li>Erro ao carregar usuário</li>;
    if (!user) return null; // Garante que não renderiza se user for undefined

    console.log(user);
    return (
        <Link 
            key={user.user_id} 
            to={`/profile/partner`} 
            state={{ user: user }}
        >
            <li className="inbox-inner">
                <a href="#">
                    <div className="inbox-item">
                        <div className="inbox-img">
                            <img src={user?.profile_picture || "default-avatar.png"} className="rounded" alt={user?.name || "Usuário"} />
                        </div>
                        <div className="inbox-item-info">
                            <p className="author">{user?.username || "Nome Indisponível"}</p>
                            <p className="inbox-message">{user?.role || "Cargo não informado"}</p>
                        </div>
                        <div className="hover_action">
                            <a href="#"><i className="zmdi zmdi-favorite"></i></a>
                            <a href="#"><i className="zmdi zmdi-edit"></i></a>
                            <a href="#"><i className="zmdi zmdi-check-circle"></i></a>
                        </div>
                    </div>
                </a>
            </li>
        </Link>
    );
};
