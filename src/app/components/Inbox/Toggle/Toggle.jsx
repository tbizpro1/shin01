import { useState } from "react"

export default function Toggle() {
    const [active, setActive] = useState(false)
    return(
        <div onClick={() => setActive(!active)} className="btn-group hidden-sm-down" role="group">
            <div className={`btn-group ${active && "show"}`}>
                <button type="button" className="btn btn-simple dropdown-toggle btn-round" data-toggle="dropdown" aria-haspopup="true" aria-expanded={`${active ? "true" : "false"}`}>
                    <i className="zmdi zmdi-label"></i>
                    <span className="caret"></span>
                </button>
                <ul className={`dropdown-menu dropdown-menu-right slideDown ${ active && "show"}`}>
                    <li>
                        <a href="javascript:void(0);">Family</a>
                    </li>
                    <li>
                        <a href="javascript:void(0);">Work</a>
                    </li>
                    <li>
                        <a href="javascript:void(0);">Google</a>
                    </li>
                    <li role="separator" className="divider"></li>
                    <li>
                        <a href="javascript:void(0);">Create a Label</a>
                    </li>
                </ul>
            </div>
        </div>
    )
};
