import React from "react";
import { Link} from '@inertiajs/react';

export default function Shortcuts () {

    return (
        <div class="widget">
            <h4 class="widget-title">Shortcuts</h4>
            <ul class="naves">
                <li>
                    <i class="ti-clipboard"></i>
                    <Link to={'/'}>News feed</Link>
                </li>
                <li>
                    <i class="ti-mouse-alt"></i>
                    <Link to={'profile/inbox'}>Inbox</Link>
                </li>
                <li>
                    <i class="ti-image"></i>
                    <Link to={'/'}>images</Link>
                </li>
                <li>
                    <i class="ti-video-camera"></i>
                    <Link to={'/'}>videos</Link>
                </li>
                <li>
                    <i class="ti-comments-smiley"></i>
                    <Link to={'/'}>Messages</Link>
                </li>
                <li>
                    <i class="ti-bell"></i>
                    <Link to={'/'}>Notifications</Link>
                </li>
                <li>
                    <i class="ti-power-off"></i>
                    <Link href={'/logout'}>Logout</Link>
                </li>
            </ul>
        </div>
    )
}