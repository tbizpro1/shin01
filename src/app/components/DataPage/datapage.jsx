import React, { useEffect, useState } from "react";
import TopBar from "../TopBar/topbar";
import RightSideBar from "../RigthSideBar/rigthsidebar";
import LeftSideBar from "../LeftSideBar/leftsidebar";
import { useLocation } from "react-router";
import { ContentData } from "../DataContent/contentdata";

export function DataPage() {
    const [enterprise, setEnterprise] = useState(null)
    const location = useLocation();
    const enter = location.state?.enter;

    //o codigo useEffect sera executado apos a renderizacao do componente
    useEffect(() => {
        console.log("useEffect executado")
        setEnterprise(enter)
    }, [location.state])

    console.log("empresa no DataPage:", enterprise) //verificar o valor de enterprise

    return (
        <div className="theme-purple">
            <TopBar />
            <LeftSideBar enter={enterprise} />
            <RightSideBar />
            <section className="content">
                <ContentData enterprise={enterprise}/>
            </section>
        </div>
    )
}