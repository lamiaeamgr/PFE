import { Link, Head } from '@inertiajs/react';
import Shortcuts from "@/componentsp/shortcuts";
import Friends from "@/componentsp/friends";
import Following from "@/componentsp/following";
import Activity from "@/componentsp/recentActivity";
import YourPage from "@/componentsp/yourPage";
import Header from "@/componentsp/header";
import { Inertia } from '@inertiajs/inertia';
import { useState } from 'react';

export default function Profile (props) {
    // const [selectedFile, setSelectedFile] = useState(null);

    // const handleFileChange = (event) => {
    //   const file = event.target.files[0];
    //   if (file) {
    //     setSelectedFile(file);
    //     handleFileUpload(file);
    //   }
    // };
  
    // const handleFileUpload = (file) => {
    //   const formData = new FormData();
    //   formData.append('cover_photo', file);
  
    //   Inertia.post('/profile/cover-photo', formData, {
    //     onSuccess: () => {
    //       alert('Cover photo updated successfully!');
    //       console.log('backend')
    //     },
    //     onError: (errors) => {
    //       console.error(errors);
    //       alert('There was an error updating the cover photo.');
    //     },
    //   });
    // };
    const [selectedCoverFile, setSelectedCoverFile] = useState(null);
    const [selectedAvatarFile, setSelectedAvatarFile] = useState(null);
  
    const handleCoverFileChange = (event) => {
      const file = event.target.files[0];
      if (file) {
        setSelectedCoverFile(file);
        handleFileUpload(file, 'cover_photo', '/profile/cover-photo');
      }
    };
  
    const handleAvatarFileChange = (event) => {
      const file = event.target.files[0];
      if (file) {
        setSelectedAvatarFile(file);
        handleFileUpload(file, 'avatar_photo', '/profile/avatar-photo');
      }
    };
  
    const handleFileUpload = (file, fieldName, url) => {
      const formData = new FormData();
      formData.append(fieldName, file);
  
      Inertia.post(url, formData, {
        onSuccess: () => {
          alert(`${fieldName.replace('_', ' ')} updated successfully!`);
        },
        onError: (errors) => {
          console.error(errors);
          alert(`There was an error updating the ${fieldName.replace('_', ' ')}.`);
        },
      });
    };
     
    return (
        <>
        <div className="theme-layout">
            {/* HEADER */}
            <Header />
		
            <section>
                <div className="feature-photo">
                    <figure><img src={`/storage/${props.userData.cover_path}`} alt="" /></figure>
                    <div className="add-btn">
                        <span>{props.followerCount} followers</span>
                        <Link href="#" title="" data-ripple="">Add Friend</Link>
                    </div>
                    <form className="edit-phto">
                        <i className="fa fa-camera-retro"></i>
                        <label className="fileContainer" htmlFor='cover_path'>
                            Edit Cover Photo
                        <input type="file" onChange={handleCoverFileChange} id="cover_path"/>
                        </label>
                    </form>
                    <div className="container-fluid">
                        <div className="row merged">
                            <div className="col-lg-2 col-sm-3">
                                <div className="user-avatar">
                                    <figure>
                                        <img src={`storage/${props.userData.avatar_path}`} alt="" />
                                        <form className="edit-phto">
                                            <i className="fa fa-camera-retro"></i>
                                            <label className="fileContainer">
                                                Edit Display Photo
                                                <input type="file" onChange={handleAvatarFileChange} id='avatar_path'/>
                                            </label>
                                        </form>
                                    </figure>
                                </div>
                            </div>
                            <div className="col-lg-10 col-sm-9">
                                <div className="timeline-info">
                                    <ul>
                                        <li className="admin-name">
                                            <h5>Janice Griffith</h5>
                                            <span>Group Admin</span>
                                        </li>
                                        <li>
                                            <Link href={'/profile/posts'}className="active" title="" data-ripple="">time line</Link>
                                            <Link href={'/profile/photos'} className=""  title="" data-ripple="">Photos</Link>
                                            <Link href={'/profile/videos'} className=""  title="" data-ripple="">Videos</Link>
                                            <Link href={'/profile/friends'} className=""  title="" data-ripple="">Friends</Link>
                                            <Link href={'/profile/groups'} className=""  title="" data-ripple="">Groups</Link>
                                            <Link href={'/profile/about'} className=""  title="" data-ripple="">about</Link>
                                            <Link href={'/profile/basic-info'} className=""  title="" data-ripple="">more</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="gap gray-bg">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="row" id="page-contents">
                                    <div className="col-lg-3">
                                        <aside className="sidebar static">
                                            {/* SHORTCUTS */}
                                            <Shortcuts />
                                            {/* WHO'S FOLLOWING */}
                                            {props.followers.map((follower) => (
                                                    
                                                    <Following
                                                        key={follower.id} // Assurez-vous d'ajouter une clé unique pour chaque suiveur
                                                        img={follower.avatar_path} // Chemin vers l'avatar du suiveur
                                                        firstname={follower.firstname} // Prénom du suiveur
                                                        lastname={follower.lastname} // Nom de famille du suiveur
                                                    />
                                                ))}
                                        </aside>
                                    </div>
                                    <div className="col-lg-6">
                                        {/* <div className="loadMore">
                                            <div className="central-meta item">
                                                <div className="new-postbox">
                                                    <figure>
                                                        <img src="../images/resources/admin2.jpg" alt="" />
                                                    </figure>
                                                    <div className="newpst-input">
                                                        <form method="post">
                                                            <textarea rows="2" placeholder="write something"></textarea>
                                                            <div className="attachments">
                                                                <ul>
                                                                    <li>
                                                                        <i className="fa fa-music"></i>
                                                                        <label className="fileContainer">
                                                                            <input type="file" />
                                                                        </label>
                                                                    </li>
                                                                    <li>
                                                                        <i className="fa fa-image"></i>
                                                                        <label className="fileContainer">
                                                                            <input type="file" />
                                                                        </label>
                                                                    </li>
                                                                    <li>
                                                                        <i className="fa fa-video-camera"></i>
                                                                        <label className="fileContainer">
                                                                            <input type="file" />
                                                                        </label>
                                                                    </li>
                                                                    <li>
                                                                        <i className="fa fa-camera"></i>
                                                                        <label className="fileContainer">
                                                                            <input type="file" />
                                                                        </label>
                                                                    </li>
                                                                    <li>
                                                                        <button type="submit">Publish</button>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>*/}
                                            {/* ADD NEW POST */}
                                            {/* <div className="central-meta item">
                                                <div className="user-post">
                                                    <div className="friend-info">
                                                        <figure>
                                                            <img src="../images/resources/friend-avatar10.jpg" alt="" />
                                                        </figure>
                                                        <div className="friend-name">
                                                            <ins><Link href="time-line.html" title="">Janice Griffith</Link></ins>
                                                            <span>published: june,2 2018 19:PM</span>
                                                        </div>
                                                        <div className="description">
                                                            <p>
                                                                World's most beautiful car in Curabitur <Link href="#" title="">#test drive booking !</Link> the most beatuiful car available in america and the saudia arabia, you can book your test drive by our official website
                                                            </p>
                                                            </div>
                                                        <div className="post-meta">
                                                            <div className="linked-image align-left">
                                                                <Link href="#" title=""><img src="../images/resources/page1.jpg" alt="" /></Link>
                                                            </div>
                                                            <div className="detail">
                                                                <span>Love Maid - ChillGroves</span>
                                                                <p>Lorem ipsum dolor sit amet, consectetur ipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua... </p>
                                                                <Link href="#" title="">www.sample.com</Link>
                                                            </div>		
                                                            <div className="we-video-info">
                                                                <ul>
                                                                    <li>
                                                                        <span className="views" data-toggle="tooltip" title="views">
                                                                            <i className="fa fa-eye"></i>
                                                                            <ins>1.2k</ins>
                                                                        </span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="comment" data-toggle="tooltip" title="Comments">
                                                                            <i className="fa fa-comments-o"></i>
                                                                            <ins>52</ins>
                                                                        </span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="like" data-toggle="tooltip" title="like">
                                                                            <i className="ti-heart"></i>
                                                                            <ins>2.2k</ins>
                                                                        </span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="dislike" data-toggle="tooltip" title="dislike">
                                                                            <i className="ti-heart-broken"></i>
                                                                            <ins>200</ins>
                                                                        </span>
                                                                    </li>
                                                                    <li className="social-media">
                                                                        <div className="menu">
                                                                            <div className="btn trigger"><i className="fa fa-share-alt"></i></div>
                                                                            <div className="rotater">
                                                                                <div className="btn btn-icon"><Link href="#" title=""><i className="fa fa-html5"></i></Link></div>
                                                                            </div>
                                                                            <div className="rotater">
                                                                                <div className="btn btn-icon"><Link href="#" title=""><i className="fa fa-facebook"></i></Link></div>
                                                                            </div>
                                                                            <div className="rotater">
                                                                                <div className="btn btn-icon"><Link href="#" title=""><i className="fa fa-google-plus"></i></Link></div>
                                                                            </div>
                                                                            <div className="rotater">
                                                                                <div className="btn btn-icon"><Link href="#" title=""><i className="fa fa-twitter"></i></Link></div>
                                                                            </div>
                                                                            <div className="rotater">
                                                                                <div className="btn btn-icon"><Link href="#" title=""><i className="fa fa-css3"></i></Link></div>
                                                                            </div>
                                                                            <div className="rotater">
                                                                                <div className="btn btn-icon"><Link href="#" title=""><i className="fa fa-instagram"></i></Link>
                                                                                </div>
                                                                            </div>
                                                                                <div className="rotater">
                                                                                <div className="btn btn-icon"><Link href="#" title=""><i className="fa fa-dribbble"></i></Link>
                                                                                </div>
                                                                            </div>
                                                                            <div className="rotater">
                                                                                <div className="btn btn-icon"><Link href="#" title=""><i className="fa fa-pinterest"></i></Link>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> 
                                            <div className="central-meta item">
                                                <div className="user-post">
                                                    <div className="friend-info">
                                                        <figure>
                                                            <img src="../images/resources/friend-avatar10.jpg" alt="" />
                                                        </figure>
                                                        <div className="friend-name">
                                                            <ins><Link href="time-line.html" title="">Janice Griffith</Link></ins>
                                                            <span>published: june,2 2018 19:PM</span>
                                                        </div>
                                                        <div className="post-meta">
                                                            <img src="../images/resources/user-post.jpg" alt="" />
                                                            <div className="we-video-info">
                                                                <ul>
                                                                    <li>
                                                                        <span className="views" data-toggle="tooltip" title="views">
                                                                            <i className="fa fa-eye"></i>
                                                                            <ins>1.2k</ins>
                                                                        </span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="comment" data-toggle="tooltip" title="Comments">
                                                                            <i className="fa fa-comments-o"></i>
                                                                            <ins>52</ins>
                                                                        </span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="like" data-toggle="tooltip" title="like">
                                                                            <i className="ti-heart"></i>
                                                                            <ins>2.2k</ins>
                                                                        </span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="dislike" data-toggle="tooltip" title="dislike">
                                                                            <i className="ti-heart-broken"></i>
                                                                            <ins>200</ins>
                                                                        </span>
                                                                    </li>
                                                                    <li className="social-media">
                                                                        <div className="menu">
                                                                            <div className="btn trigger"><i className="fa fa-share-alt"></i></div>
                                                                            <div className="rotater">
                                                                                <div className="btn btn-icon"><Link href="#" title=""><i className="fa fa-html5"></i></Link></div>
                                                                            </div>
                                                                            <div className="rotater">
                                                                                <div className="btn btn-icon"><Link href="#" title=""><i className="fa fa-facebook"></i></Link></div>
                                                                            </div>
                                                                            <div className="rotater">
                                                                                <div className="btn btn-icon"><Link href="#" title=""><i className="fa fa-google-plus"></i></Link></div>
                                                                            </div>
                                                                            <div className="rotater">
                                                                                <div className="btn btn-icon"><Link href="#" title=""><i className="fa fa-twitter"></i></Link></div>
                                                                            </div>
                                                                            <div className="rotater">
                                                                                <div className="btn btn-icon"><Link href="#" title=""><i className="fa fa-css3"></i></Link></div>
                                                                            </div>
                                                                            <div className="rotater">
                                                                                <div className="btn btn-icon"><Link href="#" title=""><i className="fa fa-instagram"></i></Link></div>
                                                                            </div>
                                                                            <div className="rotater">
                                                                                <div className="btn btn-icon"><Link href="#" title=""><i className="fa fa-dribbble"></i></Link></div>
                                                                            </div>
                                                                            <div className="rotater">
                                                                                <div className="btn btn-icon"><Link href="#" title=""><i className="fa fa-pinterest"></i></Link></div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="description">
                                                                <p>
                                                                    Curabitur world's most beautiful car in <Link href="#" title="">#test drive booking !</Link> the most beatuiful car available in america and the saudia arabia, you can book your test drive by our official website
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="coment-area">
                                                        <ul className="we-comet">
                                                            <li>
                                                                <div className="comet-avatar">
                                                                    <img src="../images/resources/comet-1.jpg" alt="" />
                                                                </div>
                                                                <div className="we-comment">
                                                                    <div className="coment-head">
                                                                        <h5><Link href="time-line.html" title="">Jason borne</Link></h5>
                                                                        <span>1 year ago</span>
                                                                        <Link className="we-reply" href="#" title="Reply"><i className="fa fa-reply"></i></Link>
                                                                    </div>
                                                                    <p>we are working for the dance and sing songs. this car is very awesome for the youngster. please vote this car and like our post</p>
                                                                </div>
                                                                <ul>
                                                                    <li>
                                                                        <div className="comet-avatar">
                                                                            <img src="../images/resources/comet-2.jpg" alt="" />
                                                                        </div>
                                                                        <div className="we-comment">
                                                                            <div className="coment-head">
                                                                                <h5><Link href="time-line.html" title="">alexendra dadrio</Link></h5>
                                                                                <span>1 month ago</span>
                                                                                <Link className="we-reply" href="#" title="Reply"><i className="fa fa-reply"></i></Link>
                                                                            </div>
                                                                            <p>yes, really very awesome car i see the features of this car in the official website of <Link href="#" title="">#Mercedes-Benz</Link> and really impressed :-)</p>
                                                                        </div>
                                                                    </li>
                                                                    <li>
                                                                        <div className="comet-avatar">
                                                                            <img src="../images/resources/comet-3.jpg" alt="" />
                                                                        </div>
                                                                        <div className="we-comment">
                                                                            <div className="coment-head">
                                                                                <h5><Link href="time-line.html" title="">Olivia</Link></h5>
                                                                                <span>16 days ago</span>
                                                                                <Link className="we-reply" href="#" title="Reply"><i className="fa fa-reply"></i></Link>
                                                                            </div>
                                                                            <p>i like lexus cars, lexus cars are most beautiful with the awesome features, but this car is really outstanding than lexus</p>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li>
                                                                <div className="comet-avatar">
                                                                    <img src="../images/resources/comet-1.jpg" alt="" />
                                                                </div>
                                                                <div className="we-comment">
                                                                    <div className="coment-head">
                                                                        <h5><Link href="time-line.html" title="">Donald Trump</Link></h5>
                                                                        <span>1 week ago</span>
                                                                        <Link className="we-reply" href="#" title="Reply"><i className="fa fa-reply"></i></Link>
                                                                    </div>
                                                                    <p>we are working for the dance and sing songs. this video is very awesome for the youngster. please vote this video and like our channel
                                                                        <i className="em em-smiley"></i>
                                                                    </p>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <Link href="#" title="" className="showmore underline">more comments</Link>
                                                            </li>
                                                            <li className="post-comment">
                                                                <div className="comet-avatar">
                                                                    <img src="../images/resources/comet-1.jpg" alt="" />
                                                                </div>
                                                                <div className="post-comt-box">
                                                                    <form method="post">
                                                                        <textarea placeholder="Post your comment"></textarea>
                                                                        <div className="add-smiles">
                                                                            <span className="em em-expressionless" title="add icon"></span>
                                                                        </div>
                                                                        <div className="smiles-bunch">
                                                                            <i className="em em---1"></i>
                                                                            <i className="em em-smiley"></i>
                                                                            <i className="em em-anguished"></i>
                                                                            <i className="em em-laughing"></i>
                                                                            <i className="em em-angry"></i>
                                                                            <i className="em em-astonished"></i>
                                                                            <i className="em em-blush"></i>
                                                                            <i className="em em-disappointed"></i>
                                                                            <i className="em em-worried"></i>
                                                                            <i className="em em-kissing_heart"></i>
                                                                            <i className="em em-rage"></i>
                                                                            <i className="em em-stuck_out_tongue"></i>
                                                                        </div>
                                                                        <button type="submit"></button>
                                                                    </form>	
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="central-meta item">
                                                <div className="user-post">
                                                    <div className="friend-info">
                                                        <figure>
                                                            <img src="../images/resources/friend-avatar10.jpg" alt="" />
                                                        </figure>
                                                        <div className="friend-name">
                                                            <ins><Link href="time-line.html" title="">Janice Griffith</Link></ins>
                                                            <span>published: june,2 2018 19:PM</span>
                                                        </div>
                                                        <div className="post-meta">
                                                            <iframe src="https://player.vimeo.com/video/15232052" height="315" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
                                                            <div className="we-video-info">
                                                                <ul>
                                                                    <li>
                                                                        <span className="views" data-toggle="tooltip" title="views">
                                                                            <i className="fa fa-eye"></i>
                                                                            <ins>1.2k</ins>
                                                                        </span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="comment" data-toggle="tooltip" title="Comments">
                                                                            <i className="fa fa-comments-o"></i>
                                                                            <ins>52</ins>
                                                                        </span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="like" data-toggle="tooltip" title="like">
                                                                            <i className="ti-heart"></i>
                                                                            <ins>2.2k</ins>
                                                                        </span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="dislike" data-toggle="tooltip" title="dislike">
                                                                            <i className="ti-heart-broken"></i>
                                                                            <ins>200</ins>
                                                                        </span>
                                                                    </li>
                                                                    <li className="social-media">
                                                                        <div className="menu">
                                                                            <div className="btn trigger"><i className="fa fa-share-alt"></i></div>
                                                                            <div className="rotater">
                                                                                <div className="btn btn-icon"><Link href="#" title=""><i className="fa fa-html5"></i></Link></div>
                                                                            </div>
                                                                            <div className="rotater">
                                                                                <div className="btn btn-icon"><Link href="#" title=""><i className="fa fa-facebook"></i></Link></div>
                                                                            </div>
                                                                            <div className="rotater">
                                                                                <div className="btn btn-icon"><Link href="#" title=""><i className="fa fa-google-plus"></i></Link></div>
                                                                            </div>
                                                                            <div className="rotater">
                                                                                <div className="btn btn-icon"><Link href="#" title=""><i className="fa fa-twitter"></i></Link></div>
                                                                            </div>
                                                                            <div className="rotater">
                                                                                <div className="btn btn-icon"><Link href="#" title=""><i className="fa fa-css3"></i></Link></div>
                                                                            </div>
                                                                            <div className="rotater">
                                                                                <div className="btn btn-icon"><Link href="#" title=""><i className="fa fa-instagram"></i></Link></div>
                                                                            </div>
                                                                            <div className="rotater">
                                                                                <div className="btn btn-icon"><Link href="#" title=""><i className="fa fa-dribbble"></i></Link></div>
                                                                            </div>
                                                                            <div className="rotater">
                                                                                <div className="btn btn-icon"><Link href="#" title=""><i className="fa fa-pinterest"></i></Link></div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="description">
                                                                <p>
                                                                    Lonely Cat Enjoying in Summer Curabitur <Link href="#" title="">#mypage</Link> ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc,
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="coment-area">
                                                        <ul className="we-comet">
                                                            <li>
                                                                <div className="comet-avatar">
                                                                    <img src="../images/resources/comet-1.jpg" alt="" />
                                                                </div>
                                                                <div className="we-comment">
                                                                    <div className="coment-head">
                                                                        <h5><Link href="time-line.html" title="">Jason borne</Link></h5>
                                                                        <span>1 year ago</span>
                                                                        <Link className="we-reply" href="#" title="Reply"><i className="fa fa-reply"></i></Link>
                                                                    </div>
                                                                    <p>we are working for the dance and sing songs. this video is very awesome for the youngster. please vote this video and like our channel</p>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="comet-avatar">
                                                                    <img src="../images/resources/comet-2.jpg" alt="" />
                                                                </div>
                                                                <div className="we-comment">
                                                                    <div className="coment-head">
                                                                        <h5><Link href="time-line.html" title="">Sophia</Link></h5>
                                                                        <span>1 week ago</span>
                                                                        <Link className="we-reply" href="#" title="Reply"><i className="fa fa-reply"></i></Link>
                                                                    </div>
                                                                    <p>we are working for the dance and sing songs. this video is very awesome for the youngster.
                                                                        <i className="em em-smiley"></i>
                                                                    </p>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <Link href="#" title="" className="showmore underline">more comments</Link>
                                                            </li>
                                                            <li className="post-comment">
                                                                <div className="comet-avatar">
                                                                    <img src="../images/resources/comet-2.jpg" alt="" />
                                                                </div>
                                                                <div className="post-comt-box">
                                                                    <form method="post">
                                                                        <textarea placeholder="Post your comment"></textarea>
                                                                        <div className="add-smiles">
                                                                            <span className="em em-expressionless" title="add icon"></span>
                                                                        </div>
                                                                        <div className="smiles-bunch">
                                                                            <i className="em em---1"></i>
                                                                            <i className="em em-smiley"></i>
                                                                            <i className="em em-anguished"></i>
                                                                            <i className="em em-laughing"></i>
                                                                            <i className="em em-angry"></i>
                                                                            <i className="em em-astonished"></i>
                                                                            <i className="em em-blush"></i>
                                                                            <i className="em em-disappointed"></i>
                                                                            <i className="em em-worried"></i>
                                                                            <i className="em em-kissing_heart"></i>
                                                                            <i className="em em-rage"></i>
                                                                            <i className="em em-stuck_out_tongue"></i>
                                                                        </div>
                                                                        <button type="submit"></button>
                                                                    </form>	
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> */}
                                    </div>
                                    {/* CENTREL META */}
                                    <div className="col-lg-3">
                                        <aside className="sidebar static">
                                            {/* RECENT ACTIVITY */}
                                            <Activity />
                                            {/* FRIENDS */}
                                            <Friends />
                                        </aside>
                                    </div>
                                </div>	
                            </div>
                        </div>
                    </div>
                </div>	
            </section>
        </div>
        </>
    )
}