import StartupSettings from "../StarupSettings/StartupSettings";

export const MainContent = ({ activeTab, setActiveTab, enterprise }) => {
    const tabs = [
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
            {activeTab === 'usersettings' && <StartupSettings enterprise={enterprise} />}
        </div>
        </>
    );
};