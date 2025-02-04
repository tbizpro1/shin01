import { useContext, useEffect, useState } from "react"
import getEnterpriseById from "../../api/get/get-enterprise-by-id"
import { PartnerItems } from "../PartnerItems/PartnerItems"
import { AuthContext } from "../../context/authContext"
import usePartners from "../../hooks/get_partners_by_id"
import { Link } from "react-router-dom"

export function StartupItem({enter}) {
    const [startup, setStartup] = useState(null)
    const {token} = useContext(AuthContext)
    useEffect(()=>{
        getEnterpriseById(enter?.enterprise_id, token).then(response => {
            setStartup(response)
            console.log(startup)
        })
    },[])
    console.log("startup", startup)

    const parters = usePartners(startup?.enterprise_id, token)
    console.log("teste",parters)

    return (
        <tr key={enter.enterprise_id}>
            <td>
                <span className="zmdi-hc-spin">
                    <Link 
                        key={enter.enterprise_id} 
                        to={'/homestartup'}
                        state={{ enter: startup }}
                    >
                            <img
                                className="rounded-circle"
                                src={startup?.profile_picture}
                                width="58"
                                height="58"
                                alt="Logo"
                            />
                    </Link> 
                </span> 
            </td>
            <td>
                <span className="list-name">{startup?.name}</span>
            </td>
            <td> <span className="text-muted">{startup?.market || "Location not available"}</span></td>
            <td>
                <ul className="list-unstyled team-info m-b-0">
                    {
                        parters.map((partner) => <PartnerItems token={token} id_partner={partner.user_id} src={partner?.profile_picture}/>)
                    }
                </ul>
            </td>
            <td><span className="badge badge-info">Fase 3</span></td>
            <td>19 Mar 2025</td>
            </tr>
        )
};