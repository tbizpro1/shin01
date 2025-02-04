import useGetUser from "../../hooks/get-user-by-id"

export function PartnerItems({token, id_partner}) {
    const user = useGetUser(id_partner, token)
    return(
        <li><img src={user?.user?.profile_picture} alt="Avatar" /></li>
    )
};
