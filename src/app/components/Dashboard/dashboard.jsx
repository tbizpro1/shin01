
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

export function DataDashboard({enterprise}) {
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
                        <TotalIncomeCard enterprise={enterprise}  data={mockIncomeData}/>
                    </div>
                    <div class="card">
                        <TotalOrdersCard />
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="card">
                        <TotalSizeTimeCard data={mockIncomeData} />
                    </div>
                    <div class="card">
                        <TotalNewClientsCard data={mockIncomeData} />
                    </div>
                </div>
            </div>
            <div class="row clearfix">
                <div class="col-lg-12">
                    <div class="card">
                        <div class="header">
                            <h2><strong>Receita</strong> Anual</h2>
                        </div>
                        <div class="body">
                            <div class="row text-center">
                                <div class="col-sm-3 col-6">
                                    <h4 class="m-t-0">$ 106 <i class="zmdi zmdi-trending-up col-green"></i></h4>
                                    <p class="text-muted"> Today's</p>
                                </div>
                                <div class="col-sm-3 col-6">
                                    <h4 class="m-t-0">$ 907 <i class="zmdi zmdi-trending-down col-red"></i></h4>
                                    <p class="text-muted">This Week's</p>
                                </div>
                                <div class="col-sm-3 col-6">
                                    <h4 class="m-t-0">$ 4210 <i class="zmdi zmdi-trending-up col-green"></i></h4>
                                    <p class="text-muted">This Month's</p>
                                </div>
                                <div class="col-sm-3 col-6">
                                    <h4 class="m-t-0">$ 67,000 <i class="zmdi zmdi-trending-up col-green"></i></h4>
                                    <p class="text-muted">This Year's</p>
                                </div>
                            </div>
                            <div id="area_chart" class="graph"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

