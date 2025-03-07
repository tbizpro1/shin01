import React, { useContext, useEffect, useState } from 'react';
import { Facebook, Twitter, Instagram, Plus, Home, Camera, Linkedin } from 'lucide-react';
import TopBar from "../../components/TopBar/topbar";
import LeftSideBar from "../../components/LeftSideBar/leftsidebar";
import RightSideBar from "../../components/RigthSideBar/rigthsidebar";
import Chat from "../../components/Chat/chat";
import { AuthContext } from '../../context/authContext';
import UserSettings from '../../components/UserSettings/usersettings';
import { perfilUnd, simao, heygler, luciana, jerdeson } from '../../../assets/images';
import { useForm } from 'react-hook-form';
import addProfileImage from '../../api/post/profile-image';
import ParterSetting from '../../components/ParterSettings/PartnerSettings';
import { useLocation } from 'react-router-dom';

const PartnerProfile = () => {
  const [userData, setUserData] = useState(null)
  const location = useLocation();
  const partner = location.state?.user; // Obtendo os dados do parceiro

  useEffect(() => {
      if (partner) {
          setUserData(partner)
          console.log('Partner:', partner);
      } else {
          console.log('No partner data available.');
      }
  }, [partner]); // Certifique-se de reagir a mudanças no 'partner'

  const tabs = [
      { id: 'usersettings', label: 'Configurações' },
  ];

  if (!partner) {
      return <div>Carregando dados do parceiro...</div>; // Exibir uma mensagem de carregamento ou algo similar
  }
  console.log("wwwww", userData)
  const [activeTab, setActiveTab] = useState('usersettings');

  return (
    <div className="theme-purple">
      <TopBar />
      <LeftSideBar />
      <RightSideBar />
      <Chat />
      <section className="content profile-page">
        <Header />
        <div className="container-fluid">
          <div className="row clearfix">
            <div className="col-lg-4 col-md-12">
              <ProfileCard partner={partner}/>
                <AboutCard  partner={userData}/>
            </div>
            <div className="col-lg-8 col-md-12">
              <MainContent activeTab={activeTab} setActiveTab={setActiveTab} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const Header = () => (
  <div className="block-header">
    <div className="row">
      <div className="col-lg-7 col-md-6 col-sm-12">
        <h2>
          Perfil
          <small className="text-muted">Informações do usuário</small>
        </h2>
      </div>
    </div>
  </div>
);

const ProfileCard = ({partner}) => {
  const { user, token } = useContext(AuthContext)
  const { register } = useForm()
  const handleProfileImageChange = async (e) => {
    console.log("ativada")
    const file = e?.target?.files[0];
    if (file) {
      const formData = new FormData();
      formData.append("profile_picture", file);

      const response = await addProfileImage(partner?.id, token, formData);

      if (response) {
        console.log('Imagem de perfil atualizada com sucesso', response);
      }
    }
    window.location.reload();
  };
  return (
    <div className="card member-card">
      <div className="header l-cyan">
        <h4 className="m-t-10">{partner?.username || 'não encontrado'}</h4>
      </div>
      <div className="member-img">
        <div className="member-card">
          <label htmlFor="formFile" className="member-img">
            <div className="image-profile">
              <img
                src={partner?.profile_picture || perfilUnd}
                className="rounded-circle"
                alt="profile-image"
              />
            </div>
            <div className="">
              <Camera className="cam" color='gray' size={48} />
            </div>
            {/* <input
              className="form-control input-overlay"
              type="file"
              id="formFile"
              {...register('profile_picture')}
              onChange={handleProfileImageChange}
            /> */}
          </label>
        </div>
      </div>
      <div className="body">
        <div className="col-12">
          <SocialLinks />
          <p className="text-muted">
            <h5 className='m-t-10'>{partner?.city + ', ' + partner?.state + ", " + partner?.cep || 'informação não encontrada'}</h5>
          </p>
        </div>
        {/* <hr /> */}
        {/* <Stats /> */}
      </div>
    </div>
  );
}

const SocialLinks = () => (
  <ul className="social-links list-unstyled align-items-center">
    <li className='mx-3'>
      <a href="#" title="facebook">
        <Facebook size={18} />
      </a>
    </li>
    <li className='mx-3'>
      <a href="#" title="twitter">
        <Twitter size={18} />
      </a>
    </li>
    <li className='mx-3'>
      <a href="#" title="instagram">
        <Instagram size={18} />
      </a>
    </li>
    <li className='mx-3'>
      <a href="#" title="linkedin">
        <Linkedin size={18} />
      </a>
    </li>
  </ul>
);

// const Stats = () => (
//   <div className="row">
//     <StatItem count="0" label="Following" />
//     <StatItem count="0" label="Followers" />
//     <StatItem count="0" label="Post" />
//   </div>
// );

// const StatItem = ({ count, label }) => (
//   <div className="col-4">
//     <h5>{count}</h5>
//     <small>{label}</small>
//   </div>
// );

const AboutCard = ({partner}) => {
  const [activeTab, setActiveTab] = useState('about');

  return (
    <div className="card">
      <ul className="nav nav-tabs">
        <TabItem
          id="about"
          label="Sobre"
          activeTab={activeTab}
          onClick={() => setActiveTab('about')}
        />
        {/* <TabItem
          id="friends"
          label="Sócios"
          activeTab={activeTab}
          onClick={() => setActiveTab('friends')}
        /> */}
      </ul>
      <div className="tab-content">
          <AboutContent partner={partner}/> 
      </div>
    </div>
  );
};

const TabItem = ({ id, label, activeTab, onClick }) => (
  <li className="nav-item">
    <button
      className={`nav-link ${activeTab === id ? 'active' : ''}`}
      onClick={onClick}
    >
      {label}
    </button>
  </li>
);

const AboutContent = ({partner}) => {
  const { user } = useContext(AuthContext)
  return (
    <div className="tab-pane body active" id="about">
      <InfoItem label="Posição" value={partner?.role} />
      <InfoItem label="Estado" value={partner?.state} />
      <InfoItem label="E-mail" value={partner?.email} />
      <InfoItem label="WhatsApp" value={partner?.whatsapp_number} />
      {/* <SkillsList /> */}
    </div>
  );
}

const InfoItem = ({ label, value }) => (
  <>
    <small className="text-muted">{label}: </small>
    <p>{value}</p>
    <hr />
  </>
);

const SkillsList = () => {
  const skills = [
    { name: 'Marketing', progress: 89, color: 'l-blue' },
    { name: 'Maths', progress: 56, color: 'l-green' },
    { name: 'Communication', progress: 78, color: 'l-amber' },
    { name: 'English', progress: 43, color: 'l-blush' },
  ];

  return (
    <ul className="list-unstyled">
      {skills.map((skill) => (
        <SkillItem key={skill.name} {...skill} />
      ))}
    </ul>
  );
};

const SkillItem = ({ name, progress, color }) => (
  <li>
    <div>{name}</div>
    <div className="progress m-b-20">
      <div
        className={`progress-bar ${color}`}
        role="progressbar"
        style={{ width: `${progress}%` }}
        aria-valuenow={progress}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <span className="sr-only">{progress}% Complete</span>
      </div>
    </div>
  </li>
);

const FriendsContent = () => {
  const friends = [
    { name: 'Simão Pedro', joinDate: 'Hoje', image: simao },
    { name: 'Luciana Tsukada', joinDate: 'Ontem', image: luciana },
    { name: 'Heygler', joinDate: '08 Nov', image: heygler },
    { name: 'Jerdeson', joinDate: '12 Dec', image: jerdeson },
    // { name: 'Breno Ramon', joinDate: '17 Dec', image: 'src/assets/images/partners/breno.jpeg' },
  ];

  return (
    <div className="container">
      <div className="row">
        {friends.map((friend, index) => (
          <div key={index} className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <div className="friend-item d-flex flex-column align-items-center text-center">
              {/* Imagem do amigo */}
              <img
                src={friend.image}
                alt={`${friend.name}'s avatar`}
                className="rounded-circle mb-"
                style={{ width: '80px', height: '80px', objectFit: 'cover' }}
              />
              {/* Informações do amigo */}
              <div>
                <h5 className="mb-1" style={{ fontSize: '18px' }}>{friend.name}</h5>
                <small className="text-muted">Aceitou: {friend.joinDate}</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
const MainContent = ({ activeTab, setActiveTab }) => {
  const [userData, setUserData] = useState(null)
  const location = useLocation();
  const partner = location.state?.user; // Obtendo os dados do parceiro

  useEffect(() => {
      if (partner) {
          setUserData(partner)
          console.log('Partner:', partner);
      } else {
          console.log('No partner data available.');
      }
  }, [partner]); // Certifique-se de reagir a mudanças no 'partner'

  const tabs = [
      { id: 'usersettings', label: 'Configurações' },
  ];

  if (!partner) {
      return <div>Carregando dados do parceiro...</div>; // Exibir uma mensagem de carregamento ou algo similar
  }
  return (
    <>
      <div className="tab-content">
        {activeTab === 'usersettings' && <ParterSetting partner={userData}/>}
      </div>
    </>
  );
};

export default PartnerProfile