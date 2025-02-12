import React, { useState } from "react";
import UserSettings from "../UserSettings/usersettings";
import { DataDashboard } from "../Dashboard/dashboard";
import { DataHistory } from "../DataHistory/datahistory";
import UpDateSettings from "../UpdateSettings/updatesettings";


export function CardData () {
  // inicializa o estado com 'update' para que o botao "Atualizar Dados" comece ativo
  const [activeTab, setActiveTab] = useState('update')
  const tabs = [
    { id: 'update', label: 'Atualizar Dados' },
    { id: 'history', label: 'Ver Histórico' },
    { id: 'dashboards', label: 'Dashboards' },
  ];

  const TabItemData = ({ id, label, activeTab, onClick }) => (
    <li className="nav-item">
      <button
        className={`custom-button ${activeTab === id ? 'active' : ''}`}
        onClick={onClick}
      >
        {label}
      </button>
    </li>
  );

  return (
    <div>
      <div className="card-custom">
        <ul className="nav nav-custom">
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
        {activeTab === 'update' && < UpDateSettings />}
      </div>
      <div className="tab-content">
        {activeTab === 'history' && <DataHistory />}
      </div>
      <div className="tab-content">
        {activeTab === 'dashboards' && <DataDashboard />}
      </div>
    </div>
  );
};