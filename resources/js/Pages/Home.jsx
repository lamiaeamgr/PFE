import { Link, Head } from '@inertiajs/react';
import Shortcuts from "@/componentsp/shortcuts";
import Friends from "@/componentsp/friends";
import Following from "@/componentsp/following";
import Activity from "@/componentsp/recentActivity";
import YourPage from "@/componentsp/yourPage";
import Header from "@/componentsp/header";
import PostList from './home/PostList';
export default function Home({ userData, followers, posts, currentUser }) {

    console.log(followers);
    console.log(userData);
    return (
        <>
            <Head title="NTIConnect" />
            <div className="theme-layout">
                {/* HEADER */}
                <Header />
                <section>
                    <div class="gap gray-bg">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="row" id="page-contents">
                                        <div class="col-lg-3">
                                            <aside class="sidebar static">
                                                {/* SHORTCUTS */}
                                                <Shortcuts />
                                                {/* WHO'S FOLLOWING */}
                                                {/* WHO'S FOLLOWING */}
                                                {followers.map((follower) => (
                                                    
                                                    <Following
                                                        key={follower.id} // Assurez-vous d'ajouter une clé unique pour chaque suiveur
                                                        img={follower.avatar_path} // Chemin vers l'avatar du suiveur
                                                        firstname={follower.firstname} // Prénom du suiveur
                                                        lastname={follower.lastname} // Nom de famille du suiveur
                                                    />
                                                ))}
                                            </aside>
                                        </div>
                                            <PostList  posts={posts} currentUser={currentUser}/>
                                        <div className="col-lg-3">
                                            <aside className="sidebar static">
                                                {/* YOUR PAGE */}
                                                <YourPage />

                                            </aside>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div className="side-panel">
                <h4 className="panel-title">General Setting</h4>
                <form method="post">
                    <div className="setting-row">
                        <span>use night mode</span>
                        <input type="checkbox" id="nightmode1" />
                        <label for="nightmode1" data-on-label="ON" data-off-label="OFF"></label>
                    </div>
                    <div className="setting-row">
                        <span>Notifications</span>
                        <input type="checkbox" id="switch22" />
                        <label for="switch22" data-on-label="ON" data-off-label="OFF"></label>
                    </div>
                    <div className="setting-row">
                        <span>Notification sound</span>
                        <input type="checkbox" id="switch33" />
                        <label for="switch33" data-on-label="ON" data-off-label="OFF"></label>
                    </div>
                    <div className="setting-row">
                        <span>My profile</span>
                        <input type="checkbox" id="switch44" />
                        <label for="switch44" data-on-label="ON" data-off-label="OFF"></label>
                    </div>
                    <div className="setting-row">
                        <span>Show profile</span>
                        <input type="checkbox" id="switch55" />
                        <label for="switch55" data-on-label="ON" data-off-label="OFF"></label>
                    </div>
                </form>
                <h4 className="panel-title">Account Setting</h4>
                <form method="post">
                    <div className="setting-row">
                        <span>Sub users</span>
                        <input type="checkbox" id="switch66" />
                        <label for="switch66" data-on-label="ON" data-off-label="OFF"></label>
                    </div>
                    <div className="setting-row">
                        <span>personal account</span>
                        <input type="checkbox" id="switch77" />
                        <label for="switch77" data-on-label="ON" data-off-label="OFF"></label>
                    </div>
                    <div className="setting-row">
                        <span>Business account</span>
                        <input type="checkbox" id="switch88" />
                        <label for="switch88" data-on-label="ON" data-off-label="OFF"></label>
                    </div>
                    <div className="setting-row">
                        <span>Show me online</span>
                        <input type="checkbox" id="switch99" />
                        <label for="switch99" data-on-label="ON" data-off-label="OFF"></label>
                    </div>
                    <div className="setting-row">
                        <span>Delete history</span>
                        <input type="checkbox" id="switch101" />
                        <label for="switch101" data-on-label="ON" data-off-label="OFF"></label>
                    </div>
                    <div className="setting-row">
                        <span>Expose author name</span>
                        <input type="checkbox" id="switch111" />
                        <label for="switch111" data-on-label="ON" data-off-label="OFF"></label>
                    </div>
                </form>
            </div>
        </>
    )
}