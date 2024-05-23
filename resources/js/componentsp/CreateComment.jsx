import React, { Fragment, useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import { router } from "@inertiajs/react";

export default function CreateComment({ postId }) {
    const [comment, setComment] = useState('');

    const handleSubmit = (e) => {
        // setPostId(parseInt(document.getElementById('Commentinput').value));
        e.preventDefault();
        // Inertia.post('/postsComment', { comment, postId });
        console.log("commentaire !!!!!!!")
        console.log(postId)
        router.visit('/postsComment', {
            method: 'POST',
            data: { comment,
                 postId},
            preserveScroll: true,
            onSuccess: page => {
                console.log(page.props);
                console.log("bravo")
            },
            onError: errors => { console.log(errors); },
            onFinish: visit => { console.log(visit); },
        })
   
    };

    return (
        <>
            <Fragment>
                <li className="post-comment">
                    <div className="comet-avatar">
                        <img src="images/resources/comet-1.jpg" alt="" />
                    </div>
                    <div className="post-comt-box">
                        <form method="post" onSubmit={handleSubmit}>
                            <textarea placeholder="Post your comment" value={comment} onChange={(e) => setComment(e.target.value)}></textarea>
                            <button type="submit" value={postId}><img src="https://static.vecteezy.com/system/resources/previews/009/351/205/non_2x/arrow-icon-arrows-sign-black-arrows-free-png.png" width={40} /></button>
                        </form>
                    </div>
                </li>
            </Fragment>
        </>
    );
}