import React from 'react';

const Main = () => {
    return (
        <main role="main">
            <div id="myCarousel" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" className="active"/>
                    <li data-target="#myCarousel" data-slide-to="1"/>
                    <li data-target="#myCarousel" data-slide-to="2"/>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://picsum.photos/1800/500?grayscale&blur=2" alt="first slide"
                             className="first-slide"/>
                        <div className="container">
                            <div className="carousel-caption text-left">
                                <h1>Example headline.</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aut
                                    consectetur delectus deleniti doloribus, ducimus eveniet, fugiat illum
                                    maxime minima minus molestias nulla numquam perferendis possimus quae quam
                                    quas, reprehenderit rerum sunt suscipit temporibus unde ut vel voluptas
                                    voluptate voluptatibus? Laudantium nobis nostrum rerum voluptates.
                                    Delectus, molestiae, sequi. Aliquid doloremque et iste laboriosam. Ab, atque
                                    autem commodi esse iure recusandae?</p>
                                <p><a href="#" className="btn btn-lg btn-primary">Sign Up</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="second-slide"
                             src="https://picsum.photos/1800/500?grayscale&blur=2"
                             alt="Second slide"/>
                        <div className="container">
                            <div className="carousel-caption">
                                <h1>Another example headline.</h1>
                                <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id
                                    elit non mi porta gravida at eget metus. Nullam id dolor id nibh
                                    ultricies vehicula ut id elit.</p>
                                <p><a className="btn btn-lg btn-primary" href="#" role="button">Learn
                                    more</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="third-slide"
                             src="https://picsum.photos/1800/500?grayscale&blur=2"
                             alt="Third slide"/>
                        <div className="container">
                            <div className="carousel-caption text-right">
                                <h1>One more for good measure.</h1>
                                <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id
                                    elit non mi porta gravida at eget metus. Nullam id dolor id nibh
                                    ultricies vehicula ut id elit.</p>
                                <p><a className="btn btn-lg btn-primary" href="#" role="button">Browse
                                    gallery</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"/>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"/>
                <span className="sr-only">Next</span>
            </a>

            <div className="container marketing">

                <div className="row">
                    <div className="col-lg-4">
                        <img className="rounded-circle"
                             src="https://picsum.photos/seed/picsum/300/300"
                             alt="Generic placeholder image" width="140" height="140"/>
                        <h2>Heading</h2>
                        <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id
                            dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac
                            consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
                        <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a>
                        </p>
                    </div>
                    <div className="col-lg-4">
                        <img className="rounded-circle"
                             src="https://picsum.photos/seed/picsum/300/300"
                             alt="Generic placeholder image" width="140" height="140"/>
                        <h2>Heading</h2>
                        <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia
                            odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce
                            dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p>
                        <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a>
                        </p>
                    </div>
                    <div className="col-lg-4">
                        <img className="rounded-circle"
                             src="https://picsum.photos/seed/picsum/300/300"
                             alt="Generic placeholder image" width="140" height="140"/>
                        <h2>Heading</h2>
                        <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                            Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus
                            commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet
                            risus.</p>
                        <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a>
                        </p>
                    </div>
                </div>

                <hr className="featurette-divider"/>

                <div className="row featurette">
                    <div className="col-md-7">
                        <h2 className="featurette-heading">First featurette heading. <span
                            className="text-muted">It'll blow your mind.</span></h2>
                        <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum
                            id ligula porta felis euismod semper. Praesent commodo cursus magna, vel
                            scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
                    </div>
                    <div className="col-md-5">
                        <img className="featurette-image img-fluid mx-auto"
                             src="https://picsum.photos/seed/picsum/500/500" alt="Generic placeholder image"/>
                    </div>
                </div>

                <hr className="featurette-divider"/>

                <div className="row featurette">
                    <div className="col-md-7 order-md-2">
                        <h2 className="featurette-heading">Oh yeah, it's that good. <span
                            className="text-muted">See for yourself.</span></h2>
                        <p className="lead">Donec ullamcorper nulla non metus auctor fringilla.
                            Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus
                            magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus
                            commodo.</p>
                    </div>
                    <div className="col-md-5 order-md-1">
                        <img className="featurette-image img-fluid mx-auto"
                             src="https://picsum.photos/seed/picsum/500/500" alt="Generic placeholder image"/>
                    </div>
                </div>

                <hr className="featurette-divider"/>

                <div className="row featurette">
                    <div className="col-md-7">
                        <h2 className="featurette-heading">And lastly, this one. <span
                            className="text-muted">Checkmate.</span></h2>
                        <p className="lead">Donec ullamcorper nulla non metus auctor fringilla.
                            Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus
                            magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus
                            commodo.</p>
                    </div>
                    <div className="col-md-5">
                        <img className="featurette-image img-fluid mx-auto"
                             src="https://picsum.photos/seed/picsum/500/500" alt="Generic placeholder image"/>
                    </div>
                </div>

                <hr className="featurette-divider"/>
            </div>
        </main>
    );
};

export default Main;
