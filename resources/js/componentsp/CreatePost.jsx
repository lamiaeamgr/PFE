import React, { Fragment, useState } from "react";
import { Inertia } from "@inertiajs/inertia";


export default function CreatePost() {
    const [body, setBody] = useState('');
    const [attachment, setAttachment] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(body);
        Inertia.post('/post', { body , attachment}); 
    };

    return (
        <>
        <Fragment>
            <div className="central-meta">
                <div className="new-postbox">
                    <figure>
                        <img src="images/resources/admin2.jpg" alt="" />
                    </figure>
                    <div className="newpst-input">
                        <form method="post" onSubmit={handleSubmit}>
                            <textarea rows="2" placeholder="write something" value={body} onChange={(e) => setBody(e.target.value)}></textarea>
                            <div className="attachments">
                                <ul>
                                    <li>
                                        <i className="fa fa-image"></i>
                                        <label className="fileContainer">
                                            <input type="file" onChange={(e) => setAttachment(e.target.files[0])} />
                                        </label>
                                    </li>
                                    <li>
                                        <i className="fa fa-video-camera"></i>
                                        <label className="fileContainer">
                                            <input type="file" onChange={(e) => setAttachment(e.target.files[0])} />
                                        </label>
                                    </li>
                                    <li>
                                        <button type="submit">Post</button>
                                    </li>
                                </ul>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Fragment>
        </>
    );
}
