import { useState, useEffect } from "react";
import allUserEnterprisePending from "../api/get/all-user-enterprise-pending";

// Hook para buscar os sócios da empresa
const usePartners = (enterpriseId, token) => {
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    // Verifica se o enterpriseId e token estão disponíveis antes de fazer a requisição
    if (enterpriseId && token) {
      allUserEnterprisePending(enterpriseId, token).then(response => {
        const responseData = Array.isArray(response) ? response : [];
        
        // Filtra os usuários aceitos
        const acceptedUsers = responseData.filter(item => item.status === "accepted");
        
        // Remove duplicatas com base no user_id
        const uniqueData = acceptedUsers.filter((item, index, self) =>
          index === self.findIndex(t => t.user_id === item.user_id)
        );
        
        // Atualiza o estado com os sócios únicos
        setPartners(uniqueData);
      }).catch(error => {
        console.error("Error fetching partners:", error);
      });
    }
  }, [enterpriseId, token]);

  return partners;
};

export default usePartners;
