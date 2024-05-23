import React, { Fragment } from "react";
import Header from "@/componentsp/header";
import Shortcuts from "@/componentsp/shortcuts";



export default function Dashboard() {



    return (
        <Fragment>
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
                                            </aside>
                                        </div>
                                            
                                        <div className="col-lg-9">
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        </Fragment>
    )
}