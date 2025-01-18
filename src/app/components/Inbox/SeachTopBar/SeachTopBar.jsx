import { PartnerAdd, PartnerArchive, PartnerRemove } from "../Actionbutton/ActionButton";
import SearchInput from "../Searchinput/SearchInput";
import Toggle from "../Toggle/Toggle";

export default function SeachTopBar({ setSearchTerm }) {
    return (
        <div className="row clearfix">
            <div className="col-lg-12">
                <div className="card action_bar">
                    <div className="body">
                        <div className="row clearfix">
                            {/* <div className="col-lg-1 col-md-2 col-3">
                                <div className="checkbox inlineblock delete_all">
                                    <input id="deleteall" type="checkbox" />
                                    <label htmlFor="deleteall">All</label>
                                </div>
                            </div> */}
                            <div className="col-lg-5 col-md-5 col-6">
                                <div className="input-group search">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Search by e-mail"
                                        onChange={(e) => setSearchTerm(e.target.value)} // Atualiza o termo de pesquisa
                                    />
                                    <span className="input-group-addon">
                                        <i className="zmdi zmdi-search"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
