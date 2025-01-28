import { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";

export const AboutCard = () => {
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
            <TabItem
            id="friends"
            label="Sócios"
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

const AboutContent = () => {
    const { user } = useContext(AuthContext)
    return (
        <div className="tab-pane body active" id="about">
        <InfoItem label="Posição" value={user?.role} />
        <InfoItem label="Estado" value={user?.state} />
        <InfoItem label="E-mail" value={user?.email} />
        <InfoItem label="WhatsApp" value={user?.whatsapp_number} />
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