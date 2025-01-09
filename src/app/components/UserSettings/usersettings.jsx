import React, { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { useForm } from "react-hook-form";
import UpDateUser from "../../api/put/update-user";

export default function UserSettings() {

const {
    user, token
} = useContext(AuthContext)

const { register, handleSubmit } = useForm({
    defaultValues:user
})
const onSubmit = (data) => {
    console.log(data)
    UpDateUser(user.id, data, token).then(response => console.log(" reposta da api: ",response))
}

    return (
        <div role="tabpanel" className="tab-pane blog-page active" id="usersettings">
            {/* <div className="card">
                <div className="header">
                    <h2><strong>Security</strong> Settings</h2>
                </div>
                <form>
                <div className="body">
                    <div className="form-group">
                        <input {...register("username")} type="text" className="form-control" placeholder="Username" />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" placeholder="Current Password" />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" placeholder="New Password" />
                    </div>
                    <button className="btn btn-info btn-round">Save Changes</button>
                </div>
                </form>
            </div> */}
            <div className="card">
                <div className="header">
                    <h2><strong>Account</strong> Settings</h2>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                <div className="body">
                    <div className="row clearfix">
                        <div className="col-lg-6 col-md-12">
                            <div className="form-group">
                                <input {...register("username")} type="text" className="form-control" placeholder="Username" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="form-group">
                                <input {...register("linkedin")} type="text" className="form-control" placeholder="LindedIn" />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                            <div className="form-group">
                                <input {...register("profession")} type="text" className="form-control" placeholder="Profissão" />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                            <div className="form-group">
                                <input {...register("email")} type="text" className="form-control" placeholder="E-mail" />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                            <div className="form-group">
                                <input {...register("phone")} type="text" className="form-control" placeholder="WhatsApp" />
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group">
                                <textarea rows="4" className="form-control no-resize" placeholder="Address Line 1"></textarea>
                            </div>
                        </div>
                        {/* <div className="col-md-12">
                            <div className="checkbox">
                                <input id="procheck1" type="checkbox" />
                                <label for="procheck1">Profile Visibility For Everyone</label>
                            </div>
                            <div className="checkbox">
                                <input id="procheck2" type="checkbox" />
                                <label for="procheck2">New task notifications</label>
                            </div>
                            <div className="checkbox">
                                <input id="procheck3" type="checkbox" />
                                <label for="procheck3">New friend request notifications</label>
                            </div>
                        </div> */}
                        <div className="col-md-12">
                            <button type="submit" className="btn btn-primary btn-round">Save Changes</button>
                        </div>
                    </div>
                </div>
                </form>
            </div>
        </div>
    )
}