
import React from "react";
import TotalRevenueCard from '../TotalRevenueCard/TotalRevenueCard';
import TotalIncomeCard from '../TotalIncomeCard/TotalIncomeCard';
import TotalOrdersCard from "../TotalOrdersCard/TotalOrdersCard";
import TotalSizeTimeCard from '../TotalSizeTimeCard/TotalSizeTimeCard';
import TotalNewClientsCard from '../TotalNewClientsCard/TotalNewClientsCard';

const mockIncomeData = {
    totalIncome: 4,
    averagePercentage: 3,
    trendData: [1, 2, 3, 6, 5, 26, 7, 1, 9, 10, 11, 22],
};

export function DataDashboard() {
    return (
        <div>
            <div className="tab-content">
                <div class="container-fluid"> 
                    <TotalRevenueCard data={mockIncomeData}/>
                    <div class="row clearfix">
                    <div class="col-lg-12">
                        <TotalIncomeCard  data={mockIncomeData}/>
                        <TotalOrdersCard />
                        <TotalSizeTimeCard data={mockIncomeData}/>
                        <TotalNewClientsCard data={mockIncomeData}/>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

