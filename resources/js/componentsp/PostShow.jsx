import React ,{Fragment, useState} from "react";
import CreateComment from "./CreateComment";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink } from "@inertiajs/inertia-react";
import { router } from "@inertiajs/react";

export default function PostShow({ post , currentUser}) {
    const [likes, setLikes] = useState({});
    const [selectedPost, setSelectedPost] = useState(null);
    const [showEditForm, setShowEditForm] = useState(false); 
   

    const handleLike = (postId) => {
        console.log('res');
        router.visit(`/posts`,  {
            method: 'POST',
            data: {post_id: postId},
            preserveScroll: true,
            onSuccess: page => {
                console.log(page.props);
            },
            onError: errors => {console.log(page.props);},
            onFinish: visit => {console.log(visit);},
          })
    };

    const handleMenuClick = (postId) => {
        setSelectedPost(postId === selectedPost ? null : postId);
    };

    const handleEditPost = (post) => {
        setEditContent(post.body);
        setShowEditForm(true);
    };

    const handleSaveEdit = (postId) => {
        Inertia.put(`/${postId}`, { body: editContent }).then(() => {
            setShowEditForm(false);
            setSelectedPost(null);
        });
    };

    const handleCopyLink = (post) => {
        navigator.clipboard.writeText(window.location.href + `/post/${post.id}`);
        alert("Link copied to clipboard!");
    };

  return (
    <div className="col-lg-6">
        <div className="loadMore">
            <div className="central-meta item" key={post.id}>
                <div className="user-post">
                    <div className="friend-info">
                        <figure>
                            <img src="../../images/resources/friend-avatar10.jpg" alt="" />
                        </figure>
                        <div className="friend-name">
                            <ins><a href="time-line.html" title="">{post.user.firstname} {post.user.lastname}</a></ins>
                            <span>published: {post.created_at}:PM</span>
                        </div>
                        <div className="post-options">
                            <div className="dropdown">
                                    <a className="dropdown-btn" type="button" id={`${post.id}`} onClick={() => handleMenuClick(post.id)}>
                                    <img src="../../images/menu.png" alt="" width={20} />
                                </a>
                                {selectedPost === post.id && (
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="#" onClick={() => handleCopyLink(post)}><img className="mr-2" src="../images/lien.png" alt="" width={20} /> Copy link</a>
                                        {currentUser.id === post.user.id && (
                                            <>
                                                <InertiaLink className="dropdown-item" href="#" onClick={() => handleEditPost(post)}><img className="mr-2" src="../images/edit.png" alt="" width={20} /> Edit post</InertiaLink>
                                                <InertiaLink className="dropdown-item" href={`/posts/${post.id}`} ><img className="mr-2" src="../images/supprimer.png" alt="" width={20} /> Delete post</InertiaLink>
                                            </>
                                        )} 
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="post-meta">
                            {post.attachments.map((attachment) => (
                                <div key={attachment.id}>
                                    <img
                                    src={"/storage/" + attachment.path}
                                    alt={attachment.name}
                                    />
                                </div>
                            ))}
                            <div className="description">
                                <p>{post.body}</p>
                            </div>
                            <div className="we-video-info">
                                <ul>
                                    <li>
                                        <span className="like" onClick={() => handleLike(post.id)}>
                                            <i className="ti-heart"></i>
                                            <ins>{post.post_reactions.length}</ins>
                                        </span>
                                    </li>
                                    <li>
                                        <span className="comment" data-toggle="tooltip" title="Comments">
                                            <i className="fa fa-comments-o"></i>
                                            <ins>{post.comments.length}</ins> 
                                        </span>
                                    </li>
                                    <li className="social-media">
                                        <div className="menu">
                                            <div className="btn trigger"><i className="fa fa-share-alt"></i></div>
                                            <div className="rotater">
                                                <div className="btn btn-icon"><a href="#" title=""><i className="fa fa-html5"></i></a></div>
                                            </div>
                                            <div className="rotater">
                                                <div className="btn btn-icon"><a href="#" title=""><i className="fa fa-facebook"></i></a></div>
                                            </div>
                                            <div className="rotater">
                                                <div className="btn btn-icon"><a href="#" title=""><i className="fa fa-google-plus"></i></a></div>
                                            </div>
                                            <div className="rotater">
                                                <div className="btn btn-icon"><a href="#" title=""><i className="fa fa-twitter"></i></a></div>
                                            </div>
                                            <div className="rotater">
                                                <div className="btn btn-icon"><a href="#" title=""><i className="fa fa-css3"></i></a></div>
                                            </div>
                                            <div className="rotater">
                                                <div className="btn btn-icon"><a href="#" title=""><i className="fa fa-instagram"></i></a>
                                                </div>
                                            </div>
                                            <div className="rotater">
                                                <div className="btn btn-icon"><a href="#" title=""><i className="fa fa-dribbble"></i></a>
                                            </div>
                                            </div>
                                            <div className="rotater">
                                                <div className="btn btn-icon"><a href="#" title=""><i className="fa fa-pinterest"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="coment-area">
                        <ul className="we-comet">
                            {post.comments.map((comment) => (
                                <li key={comment.id}>
                                    <div className="comet-avatar">
                                        <img src="../../images/resources/comet-1.jpg" alt="" />
                                    </div>
                                    <div className="we-comment">
                                        <div className="coment-head">
                                            <h5>
                                                <a href="time-line.html" title="">
                                                    {comment.user.firstname} {comment.user.lastname}
                                                </a>
                                            </h5>
                                            <span>{comment.created_at}</span>
                                        </div>
                                        <p>
                                            {comment.comment}
                                        </p>
                                    </div>
                                </li>
                            ))}
                            <CreateComment postId={post.id} />
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
