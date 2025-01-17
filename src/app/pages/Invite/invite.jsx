import Chat from "../../components/Chat/chat";
import Inbox from "../../components/Inbox/inbox";
import MailList from "../../components/Inbox/inbox";
import LeftSideBar from "../../components/LeftSideBar/leftsidebar";
import RightSideBar from "../../components/RigthSideBar/rigthsidebar";
import TopBar from "../../components/TopBar/topbar";

export default function InvitePage() {
    return (
        <div className="theme-purple">
            <TopBar />
            <LeftSideBar/>
            <RightSideBar />
            <Chat />
            <section className="content inbox">
                <Inbox/>
            </section>
        </div>
    )
};
