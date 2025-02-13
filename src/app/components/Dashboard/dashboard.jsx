
import React from "react";
import TotalRevenueCard from '../TotalRevenueCard/TotalRevenueCard';
import TotalIncomeCard from '../TotalIncomeCard/TotalIncomeCard';
import TotalOrdersCard from "../TotalOrdersCard/TotalOrdersCard";
import TotalSizeTimeCard from '../TotalSizeTimeCard/TotalSizeTimeCard';
import TotalNewClientsCard from '../TotalNewClientsCard/TotalNewClientsCard';
import EstateReport from "../AnnualRevanue/AnnualRevanue";
import EstateAnnualReport from "../AnnualRevanue/AnnualRevanue";

const mockIncomeData = {
    totalIncome: 4,
    averagePercentage: 3,
    trendData: [1, 2, 3, 6, 5, 26, 7, 1, 9, 10, 11, 22],
};

export function DataDashboard({enterprise}) {
    const reportData = {
        labels: ["2022", "2023", "2024", "2025"],
        receita: [1000, 0, 3000, 2500, 3000],
        lucro: [800, 1200, 1800, 2200],
        faturamento: [0, 100, 600, 1800, 2000],
        salesReport: 13.500,
        annualRevenue: 4.600,
        totalProfit: 4210,
    };
    return (
        <div className="container-fluid">
            <div class="row clearfix">
                <div class="col-lg-4 col-md-12 d-flex">
                    <div class="card tasks_report">
                        <TotalRevenueCard enterprise={enterprise} data={mockIncomeData}/>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="card">
                        <TotalSizeTimeCard data={mockIncomeData} />
                    </div>
                    <div class="card">
                        <TotalIncomeCard enterprise={enterprise}  data={mockIncomeData}/>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="card">
                        <TotalOrdersCard />
                    </div>
                    <div class="card">
                        <TotalNewClientsCard data={mockIncomeData} />
                    </div>
                </div>
            </div>
            <EstateAnnualReport data={reportData} />
        </div>
    )
}

