import React, { useContext, useEffect, useState } from "react";

import TopBar from "../../components/TopBar/topbar";
import LeftSideBar from "../../components/LeftSideBar/leftsidebar";
import RightSideBar from "../../components/RigthSideBar/rigthsidebar";
import Chat from "../../components/Chat/chat";
import allUserEnterprisePending from "../../api/get/all-user-enterprise-pending";
import { AuthContext } from "../../context/authContext";
import { GetUser } from "../../api/get/user-profile";

const formatPhoneNumber = (phoneNumber) => {
  if (!phoneNumber) return '';

  // Remove qualquer caractere que não seja número
  const cleanNumber = phoneNumber.replace(/\D/g, '');

  // Valida se o número possui o tamanho mínimo esperado (10 ou 11 dígitos)
  if (cleanNumber.length < 10 || cleanNumber.length > 11) {
    return 'Número inválido';
  }

  // Divide o número em partes
  const ddd = cleanNumber.slice(0, 2);
  const prefix = cleanNumber.length === 11 ? cleanNumber.slice(2, 7) : cleanNumber.slice(2, 6);
  const suffix = cleanNumber.length === 11 ? cleanNumber.slice(7) : cleanNumber.slice(6);

  // Retorna o número formatado
  return `(${ddd}) ${prefix}-${suffix}`;
};

const truncateText = (text, maxLength) => {
  if (!text) return "";
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

const AgentCard = ({ avatar, partner_id, token,partner_status  }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    GetUser(partner_id, token)
      .then((response) => {
        setUser(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [partner_id, token]);

  const socialLinks = [
    { class: "facebook", href: "#", icon: "zmdi-facebook" },
    { class: "twitter", href: "#", icon: "zmdi-twitter" },
    { class: "gplus", href: "#", icon: "zmdi-google-plus" },
    { class: "linkedin", href: "#", icon: "zmdi-linkedin" },
  ];

  return isLoading ? (
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
  ) : (
    <div className="col-lg-4 col-md-6">
      <div className="card agent">
        <div className="agent-avatar">
          <a href="profile.html">
            <img src={avatar} className="img-fluid" alt="" />
          </a>
        </div>
        <div className="agent-content">
          <div className="agent-name">
            <h4>
              <a href="profile.html">{user?.username || "Usuário desconhecido"}</a>
            </h4>
            <span>{'Teresina - PI'}</span>
            <ul className="list-unstyled team-info m-b-0">
              <li className="m-r-15">
              <small>Status </small>
              <span className="badge bg-orange">{partner_status}</span>
                {/* <small>Team</small> */}
              </li>
            </ul>
            <ul className="list-unstyled team-info m-b-0">
              <li className="m-r-15">
                <small>Startup</small>
              </li>
            </ul>
          </div>
          <ul className="agent-contact-details">
            <li>
              <i className="zmdi zmdi-phone"></i>
              <span>{formatPhoneNumber(user?.phone) || "Não disponível"}</span>
            </li>
            <li>
              <i className="zmdi zmdi-email"></i>
              <span>{truncateText(user?.email, 25)}</span>
            </li>
          </ul>
          <ul className="social-icons">
            {socialLinks.map((link, index) => (
              <li key={index}>
                <a className={link.class} href={link.href}>
                  <i className={`zmdi ${link.icon}`}></i>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};



const AgentsPage = () => {
  const {user, token, enterprise} = useContext(AuthContext)
  const [partners, setPartners] = useState([])

  useEffect(()=>{
    allUserEnterprisePending(enterprise[0].enterprise_id, token).then(
      response => {
        const uniqueData = response.filter(
          (item, index, self) =>
            index === self.findIndex(t => t.user_id === item.user_id)
        );
        console.log("uniqueData", uniqueData);
        setPartners(uniqueData);
      }
    )
  },[])

  console.log("partns", partners)

  return (
    <div className="theme-purple">
      <TopBar />
      <LeftSideBar />
      <RightSideBar />
      <Chat />
      <section className="content agent">
        <div className="block-header">
          <div className="row">
            <div className="col-lg-7 col-md-6 col-sm-12">
              <h2>
                All Agents
                <small className="text-muted">Welcome to Shin</small>
              </h2>
            </div>
            <div className="col-lg-5 col-md-6 col-sm-12">
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
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row clearfix">
            {partners.map((agent, index) => (
              <AgentCard
                key={index}
                avatar={'https://secure.gravatar.com/avatar/752c5cf32c634249bebcef3c9b35b37d?s=500&d=mm&r=g'}
                partner_id={agent.user_id}
                partner_status={agent.status}
                token={token}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AgentsPage;