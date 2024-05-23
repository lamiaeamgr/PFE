import React from "react";
import { Link } from "react-router-dom";

export default function EditInfo () {

    return (
    <div class="widget">
        <h4 class="widget-title">Edit info</h4>
        <ul class="naves">
            <li>
                <i class="ti-info-alt"></i>
                <Link to={'/profile/basic-info'}><a title="">Basic info</a></Link>
            </li>
            <li>
                <i class="ti-mouse-alt"></i>
                <Link to={'/profile/education-work'}><a title="">Education &amp; Work</a></Link>
            </li>
            <li>
                <i class="ti-heart"></i>
                <Link to={'/profile/my-interests'}><a title="">My interests</a></Link>
            </li>
            <li>
                <i class="ti-settings"></i>
                <Link to={'/profile/acount-setting'}><a title="">account setting</a></Link>
            </li>
            <li>
                <i class="ti-lock"></i>
                <Link to={'/profile/change-password'}><a title="">change password</a></Link>
            </li>
        </ul>
    </div>
    )
}