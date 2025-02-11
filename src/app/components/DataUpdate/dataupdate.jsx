<<<<<<< HEAD
import React from "react";

export function DataUpdate() {
    return (
        <>
            Atualização de dados
        </>
    )
}
=======
import React, { useState } from "react";
import TotalSizeTimeCard from "../TotalSizeTimeCard/TotalSizeTimeCard";
import TotalNewClientsCard from "../TotalNewClientsCard/TotalNewClientsCard";
import TotalOrdersCard from "../TotalOrdersCard/TotalOrdersCard";
import TotalIncomeCard from "../TotalIncomeCard/TotalIncomeCard";
import TotalRevenueCard from "../TotalRevenueCard/TotalRevenueCard";

const mockIncomeData = {
    totalIncome: 4,
    averagePercentage: 3,
    trendData: [1, 2, 3, 6, 5, 26, 7, 1, 9, 10, 11, 22],
  };

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
        {activeTab === 'updatesettings' && 
          <div class="container-fluid"> 
            <TotalRevenueCard data={mockIncomeData}/>
            <div class="row clearfix">
                <TotalIncomeCard  data={mockIncomeData}/>
                <TotalOrdersCard />
                <TotalSizeTimeCard data={mockIncomeData}/>
                <TotalNewClientsCard data={mockIncomeData}/>
            </div>
          </div>
        }
      </div>
    </div>
  );
};

>>>>>>> 63fec0f5045147c14a82b1a3986d41a1155b2fa0
