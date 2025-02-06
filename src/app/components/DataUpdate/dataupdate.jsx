import React from "react";

export function CardData ({ activeTab, setActiveTab }) {
  const tabs = [
    { id: 'updatesettings', label: 'Atualizar Dados' },
    { id: 'history', label: 'Ver Histórico' },
    { id: 'dashboards', label: 'Dashboards' },
  ];

  const TabItemData = ({ id, label, activeTab, onClick }) => (
    <li className="nav-item">
      <button
        className={`nav-link ${activeTab === id ? 'active' : ''}`}
        onClick={onClick}
      >
        {label}
      </button>
    </li>
  );

  return (
    <div>
      <div className="card">
        <ul className="nav nav-tabs">
          {tabs.map((tab) => (
            <TabItemData
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
        {activeTab === 'updatesettings' && <UserSettings />}
      </div>
    </div>
  );
};