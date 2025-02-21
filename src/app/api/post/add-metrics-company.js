import axios from "axios";

export async function createCompanyMetric(token, data) {
    // Pre-process and log all data before submission
    console.log("Original data:", data);
    
    // Ensure all fields have proper values and convert to the exact format expected
    const formattedData = new URLSearchParams({
        valuation: String(data.valuation || 0),
        enterprise: String(data.enterprise || 0), // Try sending as string
        current_capital: data.current_capital ? String(data.current_capital) : "0",
        team_size: String(data.team_size || 0),
        revenue_period: String(data.revenue_period || 0),
        investment_round_open: data.investment_round_open === true ? "true" : "false",
        new_clients: String(data.new_clients || 0),
        capital_needed: String(data.capital_needed || 0),
        total_clients: String(data.total_clients || 0),
        value_foment: data.value_foment ? String(data.value_foment) : "0",
        captable: data.captable ? String(data.captable) : "", // Ensure captable is not empty
    });
    
    // Log the exact data being sent to API
    console.log("Sending to API:", Object.fromEntries(formattedData));
    
    try {
        const response = await axios.post(
            "https://shin-back.onrender.com/api/v1/company-metrics/",
            formattedData,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/x-www-form-urlencoded",
                    Accept: "application/json",
                },
            }
        );
        console.log("Raw API response:", response.data);
        return response.data;
    } catch (error) {
        if (error.response?.data) {
            console.error("API Error Response:", JSON.stringify(error.response.data));
        }
        console.error("Erro ao criar métrica da empresa:", error.message);
        throw error;
    }
}