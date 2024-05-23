import React, { useEffect } from "react";
import {Link} from '@inertiajs/react';
import $ from 'jquery'; // Import jQuery


export default function Header() {

    useEffect(() => {
        // Your JavaScript code goes here
        $('.top-area > .setting-area > li').on("click", function () {
          $(this).siblings().children('div').removeClass('active');
          $(this).children('div').addClass('active');
          return false;
        })
        })
    

    return (
        <>
        <div className="responsive-header">
            <div className="mh-head Sticky row justify-content-between">
                <span className="mh-text col-2">
                    <Link href="/"><img src="../images/logo2.png" alt="" /></Link>
                </span>
                <form className="mh-form col-6">
                    <input placeholder="search" />
                    <Link to="" className="fa fa-search"></Link>
                </form>
            </div>

        
        </div>
        
        <div className="topbar stick">
            <div className="logo">
            <Link to="/"><img src="../images/logo.png" alt="" /></Link>
            </div>
            
            <div className="top-area">
                <div className="top-search">
                    <form method="post" className="">
                        <input type="text" placeholder="Search Friend" />
                        <button data-ripple><i className="ti-search"></i></button>
                    </form>
                </div>
                <ul className="setting-area">
                    <li><Link href="/" title="Home" data-ripple=""><i className="ti-home"></i></Link></li>
                    <li>
                       <Link href="" title="Notification" data-ripple="">
                            <i className="ti-bell"></i><span>20</span>
                        </Link>
                        <div className="dropdowns">
                            <span>4 New Notifications</span>
                            <ul className="drops-menu">
                                <li>
                                    <Link href="" title="">
                                        <img src="../images/resources/thumb-1.jpg" alt="" />
                                        <div className="mesg-meta">
                                            <h6>sarah Loren</h6>
                                            <span>Hi, how r u dear ...?</span>
                                            <i>2 min ago</i>
                                        </div>
                                    </Link>
                                    <span className="tag green">New</span>
                                </li>
                                <li>
                                <Link href="" title="">
                                        <img src="../images/resources/thumb-2.jpg" alt="" />
                                        <div className="mesg-meta">
                                            <h6>Jhon doe</h6>
                                            <span>Hi, how r u dear ...?</span>
                                            <i>2 min ago</i>
                                        </div>
                                    </Link>
                                    <span className="tag red">Reply</span>
                                </li>
                                <li>
                                <Link href="" title="">
                                        <img src="../images/resources/thumb-3.jpg" alt="" />
                                        <div className="mesg-meta">
                                            <h6>Andrew</h6>
                                            <span>Hi, how r u dear ...?</span>
                                            <i>2 min ago</i>
                                        </div>
                                    </Link>
                                    <span className="tag blue">Unseen</span>
                                </li>
                                <li>
                                    <Link href="" title="">
                                        <img src="../images/resources/thumb-4.jpg" alt="" />
                                        <div className="mesg-meta">
                                            <h6>Tom cruse</h6>
                                            <span>Hi, how r u dear ...?</span>
                                            <i>2 min ago</i>
                                        </div>
                                    </Link>
                                    <span className="tag">New</span>
                                </li>
                                <li>
                                    <Link href="" title="">
                                        <img src="../images/resources/thumb-5.jpg" alt="" />
                                        <div className="mesg-meta">
                                            <h6>Amy</h6>
                                            <span>Hi, how r u dear ...?</span>
                                            <i>2 min ago</i>
                                        </div>
                                    </Link>
                                    <span className="tag">New</span>
                                </li>
                            </ul>
                            <Link href="" title="" className="more-mesg">view more</Link>
                        </div>
                    </li>
                    <li>
                    <Link href="" title="Message" data-ripple=""><Link to='/messages'><i className="ti-comment"></i></Link><span>12</span></Link>
                        <div className="dropdowns">
                            <span>5 New Messages</span>
                            <ul className="drops-menu">
                                <li>
                                    <Link href="" title="">
                                        <img src="../images/resources/thumb-1.jpg" alt="" />
                                        <div className="mesg-meta">
                                            <h6>sarah Loren</h6>
                                            <span>Hi, how r u dear ...?</span>
                                            <i>2 min ago</i>
                                        </div>
                                    </Link>
                                    <span className="tag green">New</span>
                                </li>
                                <li>
                                    <Link href="" title="">
                                        <img src="../images/resources/thumb-2.jpg" alt="" />
                                        <div className="mesg-meta">
                                            <h6>Jhon doe</h6>
                                            <span>Hi, how r u dear ...?</span>
                                            <i>2 min ago</i>
                                        </div>
                                    </Link>
                                    <span className="tag red">Reply</span>
                                </li>
                                <li>
                                    <Link href="" title="">
                                        <img src="../images/resources/thumb-3.jpg" alt="" />
                                        <div className="mesg-meta">
                                            <h6>Andrew</h6>
                                            <span>Hi, how r u dear ...?</span>
                                            <i>2 min ago</i>
                                        </div>
                                    </Link>
                                    <span className="tag blue">Unseen</span>
                                </li>
                                <li>
                                    <Link href="" title="">
                                        <img src="../images/resources/thumb-4.jpg" alt="" />
                                        <div className="mesg-meta">
                                            <h6>Tom cruse</h6>
                                            <span>Hi, how r u dear ...?</span>
                                            <i>2 min ago</i>
                                        </div>
                                    </Link>
                                    <span className="tag">New</span>
                                </li>
                                <li>
                                    <Link href="" title="">
                                        <img src="../images/resources/thumb-5.jpg" alt="" />
                                        <div className="mesg-meta">
                                            <h6>Amy</h6>
                                            <span>Hi, how r u dear ...?</span>
                                            <i>2 min ago</i>
                                        </div>
                                    </Link>
                                    <span className="tag">New</span>
                                </li>
                            </ul>
                            <Link href="" title="" className="more-mesg">view more</Link>
                        </div>
                    </li>
                </ul>
                <div className="user-img">
                    <Link href="/profile"><img src="../images/resources/admin.jpg" alt="" />
                    <span className="status f-online"></span></Link>
                    <div className="user-setting">
                        <Link href="/profile" title=""><i className="ti-user"></i> view profile</Link>
                        <Link href="" title=""><i className="ti-pencil-alt"></i>edit profile</Link>
                        <Link href="" title=""><i className="ti-power-off"></i>log out</Link>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}