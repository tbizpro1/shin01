import React, { useContext, useState } from 'react';
import { Facebook, Twitter, Instagram, Plus, Home, Camera, Linkedin } from 'lucide-react';
import TopBar from "../../components/TopBar/topbar";
import LeftSideBar from "../../components/LeftSideBar/leftsidebar";
import RightSideBar from "../../components/RigthSideBar/rigthsidebar";
import Chat from "../../components/Chat/chat";
import { AuthContext } from '../../context/authContext';
import MyPosts from '../../components/MyPost/mypost';
import UserSettings from '../../components/UserSettings/usersettings';
import Timeline from '../../components/Timeline/timeline';
import { perfilUnd, profileUser, simao } from '../../../assets/images';
import { useForm } from 'react-hook-form';
import addProfileImage from '../../api/post/profile-image';

const AgentProfile = () => {
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
              <ProfileCard />
              <AboutCard />
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
          <small className="text-muted">Informações de usuário</small>
        </h2>
      </div>
      {/* <div className="col-lg-5 col-md-6 col-sm-12">
        <button className="btn btn-primary btn-icon btn-round hidden-sm-down float-right m-l-10">
          <Plus size={24} />
          <i class="zmdi zmdi-plus"></i>
        </button>
        <Breadcrumb />
      </div> */}
    </div>
  </div>
);

const Breadcrumb = () => (
  <ul className="breadcrumb float-md-right">
    <li className="breadcrumb-item">
      <a href="/workspace">
        <i class="zmdi zmdi-home"></i> Shin
      </a>
    </li>
    <li className="breadcrumb-item">
      <a href="javascript:void(0);">Agent</a>
    </li>
    <li className="breadcrumb-item active">Agent Profile</li>
  </ul>
);

const ProfileCard = () => {
  const { user, token } = useContext(AuthContext)
  const { register } = useForm()
   const handleProfileImageChange = async (e) => {
    console.log("ativada")
    const file = e?.target?.files[0];
    if (file) {
      const formData = new FormData();
      formData.append("profile_picture", file);

      const response = await addProfileImage(user?.id, token, formData);

      if (response) {
        console.log('Imagem de perfil atualizada com sucesso', response);
      }
    }
    window.location.reload();
  };
  return (
    <div className="card member-card">
      <div className="header l-cyan">
        <h4 className="m-t-10">{user?.username || 'não encontrado'}</h4>
      </div>
      <div className="member-img">
        <div className="member-card">
          <label htmlFor="formFile" className="member-img">
            <div className="image-profile">
              <img
                src={user?.profile_picture}
                className="rounded-circle"
                alt="profile-image"
              />
            </div>
            <div className="cam-overlay">
              <Camera className="cam" color='gray' size={48} />
            </div>
            <input
              className="form-control input-overlay"
              type="file"
              id="formFile"
              {...register('profile_picture')}
              onChange={handleProfileImageChange}
            />
          </label>
        </div>

        {/* <div className="input-content member-img">
          <img
            // src="/api/placeholder/150/150"
            src={perfilUnd}
            className="rounded-circle position-relative"
            alt="profile-image"
          />
            <input className="form-control input-content" type="file" id="formFile" />
          </div> */}
        {/* </a> */}
      </div>
      <div className="body">
        <div className="col-12">
          <SocialLinks />
          <p className="text-muted">
            795 Folsom Ave, Suite 600 San Francisco, CADGE 94107
          </p>
        </div>
        <hr />
        <Stats />
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

const Stats = () => (
  <div className="row">
    <StatItem count="0" label="Following" />
    <StatItem count="0" label="Followers" />
    <StatItem count="0" label="Post" />
  </div>
);

const StatItem = ({ count, label }) => (
  <div className="col-4">
    <h5>{count}</h5>
    <small>{label}</small>
  </div>
);

const AboutCard = () => {
  const [activeTab, setActiveTab] = useState('about');

  return (
    <div className="card">
      <ul className="nav nav-tabs">
        <TabItem
          id="about"
          label="About"
          activeTab={activeTab}
          onClick={() => setActiveTab('about')}
        />
        <TabItem
          id="friends"
          label="Partners"
          activeTab={activeTab}
          onClick={() => setActiveTab('friends')}
        />
      </ul>
      <div className="tab-content">
        {activeTab === 'about' ? <AboutContent /> : <FriendsContent />}
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

const AboutContent = () => (
  <div className="tab-pane body active" id="about">
    <InfoItem label="Position" value="Admin" />
    <InfoItem label="Estate" value="Cleveland" />
    <InfoItem label="Email address" value="michael@gmail.com" />
    <InfoItem label="Phone" value="+ 202-555-0191" />
    {/* <SkillsList /> */}
  </div>
);

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
    { name: 'Simão Pedro', joinDate: 'Today', image: 'src/assets/images/partners/simao.png' },
    { name: 'Luciana Tsukada', joinDate: 'Yesterday', image: 'src/assets/images/partners/luciana.jpeg' },
    { name: 'Heygler', joinDate: '08 Nov', image: 'src/assets/images/partners/heygler.jpeg' },
    { name: 'Jerdeson', joinDate: '12 Dec', image: 'src/assets/images/partners/jerdeson.jpeg' },
    { name: 'Breno Ramon', joinDate: '17 Dec', image: 'src/assets/images/partners/breno.jpeg' },
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
                <small className="text-muted">Joined: {friend.joinDate}</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // return (
  //   <div className="tab-pane body active" id="friends">
  //     <ul className="new_friend_list list-unstyled row">
  //       {friends.map((friend, index) => (
  //         <FriendItem key={friend.name} {...friend} />
  //       ))}
  //     </ul>
  //   </div>
  // );
};

// const FriendItem = ({ name, joinDate, image }) => {
//   console.log(name, joinDate, image)
//   return (
//     <li className="col-lg-4 col-md-2 col-sm-6 col-4">
//       <a >
//         <img
//           src={simao}
//           className="img-thumbnail"
//           alt={name}
//         />
//         <h6 className="users_name">{name}</h6>
//         <small className="join_date">{joinDate}</small>
//       </a>
//     </li>
//   )
// }

const MainContent = ({ activeTab, setActiveTab }) => {
  const tabs = [
    // { id: 'mypost', label: 'My Posts' },
    // { id: 'timeline', label: 'Timeline' },
    { id: 'usersettings', label: 'Configurações' },
  ];

  return (
    <>
      <div className="card">
        <ul className="nav nav-tabs">
          {tabs.map((tab) => (
            <TabItem
              key={tab.id}
              id={tab.id}
              label={tab.label}
              activeTab={activeTab}
              onClick={() => setActiveTab(tab.id)}
            />
          ))}
        </ul>
      </div>
      <div className="tab-content">
        {/* {activeTab === 'mypost' && <MyPosts />}
        {activeTab === 'timeline' && <Timeline />} */}
        {activeTab === 'usersettings' && <UserSettings />}
      </div>
    </>
  );
};

export default AgentProfile