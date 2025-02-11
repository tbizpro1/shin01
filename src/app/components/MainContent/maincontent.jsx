import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

import { CardMain } from "../CardMain/cardmain";
import { ProfileUser } from "../ProfileUser/profileuser";
import { Temperatura } from "../Temperatura/Temperatura";
import { InstagramPosts } from "../InstagramPost/InstagramPost";
import Calendario from "../Caledario/Calendario";
import MyStartup from "../MyStartup/MyStartup";
import Timeline from "../Timeline/Timeline";

const MainContent = () => {
    const { user, token, enterprise } = useContext(AuthContext)
    console.log(enterprise)
    console.log("enter", enterprise)

    return (
        <section className="content blog-page">
            <div className="block-header">
                <div className="row">
                    <div className="col-lg-7 col-md-6 col-sm-12">
                        <h2>
                            <small className="text-muted">Bem-vindo(a) a Shin</small>
                        </h2>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="row clearfix">
                    <div class="col-lg-4 col-md-12">
                        <Temperatura />
                        <ProfileUser />
                        <div className="">
                            <Calendario/>
                            <InstagramPosts />
                        </div>
                    </div>
                    <div class="col-lg-8 col-md-12">
                        <MyStartup enterprise={enterprise}/>
                        <CardMain />
                        <Timeline/>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default MainContent
