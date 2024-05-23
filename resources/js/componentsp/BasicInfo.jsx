import React, { Fragment, useState } from "react";
import { Inertia } from "@inertiajs/inertia";

export default function BasicInfo({ user }) {
    const [firstname, setFirstname] = useState(user.firstname);
    const [lastname, setLastname] = useState(user.lastname);
    const [email, setEmail] = useState(user.email);
    const [phone, setPhone] = useState(user.phone);
    const [city, setCity] = useState(user.city);
    const [bio, setBio] = useState(user.bio || "");

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const formData = {
            firstname,
            lastname,
            email,
            phone,
            city,
            bio
        };

        Inertia.post('/profile/basic-info', formData);
    };

    return (
        <Fragment>
            <div className="col-lg-6">
                <div className="central-meta">
                    <div className="editing-info">
                        <h5 className="f-title"><i className="ti-info-alt"></i> Edit Basic Information</h5>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group half">
                                <input type="text" name="firstname" value={firstname} onChange={(e) => setFirstname(e.target.value)} required />
                                <label className="control-label">First Name</label>
                                <i className="mtrl-select"></i>
                            </div>
                            <div className="form-group half">
                                <input type="text" name="lastname" value={lastname} onChange={(e) => setLastname(e.target.value)} required />
                                <label className="control-label">Last Name</label>
                                <i className="mtrl-select"></i>
                            </div>
                            <div className="form-group">
                                <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                                <label className="control-label">Email</label>
                                <i className="mtrl-select"></i>
                            </div>
                            <div className="form-group">
                                <input type="text" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                                <label className="control-label">Phone No.</label>
                                <i className="mtrl-select"></i>
                            </div>
                            <div className="form-group">    
                                <input type="text" name="city" value={city} onChange={(e) => setCity(e.target.value)} required />
                                <label className="control-label" htmlFor="input">City</label><i className="mtrl-select"></i>
                            </div>
                            <div className="form-group">    
                                <textarea rows="4" id="textarea" value={bio} onChange={(e) => setBio(e.target.value)} required></textarea>
                                <label className="control-label" htmlFor="textarea">About Me</label><i className="mtrl-select"></i>
                            </div>
                            <div className="submit-btns">
                                <button type="submit" className="mtr-btn"><span>Update</span></button>
                            </div>
                        </form>
                    </div>
                </div>    
            </div>
        </Fragment>
    )
}
